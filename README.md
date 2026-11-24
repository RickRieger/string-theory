# String Theory

[![Tests](https://github.com/RickRieger/string-theory/actions/workflows/tests.yml/badge.svg)](https://github.com/RickRieger/string-theory/actions/workflows/tests.yml)

**No live site.** This exercise is a set of functions checked by Jest tests, not a web page. The badge above shows the latest test run on GitHub Actions; click it to see the results.

I did this exercise at the **Code Immersives** bootcamp in New York City in **March 2021**. It was forked from the instructor's repo. My code is at the top of [`main.js`](main.js), above the "PLEASE DON'T TOUCH!" line. The instructor's original instructions are kept unchanged under [Original assignment](#original-assignment-from-the-instructor) below.

## What it practices

**String building.** The rule is no string methods except `.toUpperCase()` and `.toLowerCase()`: no `.slice`, `.repeat`, `.split` or `.trim`. So every function starts with an empty string and adds to it one character at a time inside a loop:

```js
function yellingChars(str) {
  let newStr = '';
  for (const char of str) {
    newStr += `${char}!`;   // add the character AND an exclamation point
  }
  return newStr;
}
```

The 15 functions build on that pattern:

| Idea | Functions |
| --- | --- |
| Replace or add to each character | `xify`, `yellingChars`, `exclaim` |
| Keep a counter alongside the loop | `indexedChars` (from 0), `numberedChars` (from 1) |
| Loop by index instead of by character | `repeatIt`, `truncate`, `reverse` (backwards), `crazyCase` (even/odd) |
| Keep only some characters | `onlyVowels` |
| Remember something about the previous character | `titleCase`, `camelCase`, `ciEmailify`, `crazyCase2ReturnOfCrazyCase` |

That last row is the tricky one. Whether a letter should be capitalized, or a dot added, depends on whether a space came before it. My fixes below were all in that row.

## Run the tests

```bash
npm ci
npm run test:ci   # runs once and exits (expected: Tests: 38 passed, 38 total)
npm test          # the instructor's watch mode: re-runs on every save, press q to quit
```

## How it's checked

- [`main.test.js`](main.test.js) is the instructor's original test file, unchanged (29 tests).
- [`cleanup.test.js`](cleanup.test.js) has 9 tests I added in 2026 for spacing the original tests never tried: trailing, leading and double spaces.
- **GitHub Actions** ([`.github/workflows/tests.yml`](.github/workflows/tests.yml)) runs both on Node 20 on every push and pull request. The badge at the top shows the result.

## Cleanup log

### 2026-11-24

My commit message from March 7, 2021 was "that was easy", and all 29 of the instructor's tests did pass. Trying inputs the tests didn't cover turned up the problems below.

**1. Undeclared variables were leaking out as globals**

*Why:* `exclaim` and `repeatIt` wrote `newStr = ''` without `let`, and five loops used `for (i = 0; ...)` without declaring `i`. In plain (non-strict) JavaScript that doesn't cause an error. It silently creates a **global** variable that every function shares. After calling the functions, `globalThis.i` and `globalThis.newStr` existed. Added `let` to each one.

Before:

```js
function repeatIt(str, n){
  newStr = ''
  for (i=0;i<n;i++){
  newStr += str 
  }
  return newStr
  }
```

After:

```js
function repeatIt(str, n) {
  let newStr = '';
  for (let i = 0; i < n; i++) {
    newStr += str;
  }
  return newStr;
}
```

**2. `titleCase` and `camelCase` crashed on a trailing space and mishandled double spaces**

*Why:* when they hit a space, both functions reached ahead to `str[i + 1]`, capitalized it, and skipped over it with `i += 1`. That breaks two ways:

- After a trailing space there's nothing ahead, so `str[i + 1]` is `undefined`. `titleCase('hello world ')` then threw `TypeError: Cannot read properties of undefined`.
- With a double space, the "next character" is the second space. `'hello  world'` came out as `'Hello  world'` from `titleCase`, and `camelCase` left a space in.

Now each function keeps a flag that remembers "a space just happened" and decides one letter at a time. It never needs to look ahead.

Before:

```js
else if(str[i] === ' '){
    newStr += ` ${str[i+1].toUpperCase()}`
    i += 1
}
```

After:

```js
function titleCase(str) {
  let newStr = '';
  let startOfWord = true;
  for (const char of str) {
    if (char === ' ') {
      newStr += char;
      startOfWord = true;
    } else if (startOfWord) {
      newStr += char.toUpperCase();
      startOfWord = false;
    } else {
      newStr += char.toLowerCase();
    }
  }
  return newStr;
}
```

`camelCase` works the same way with a `capitalizeNext` flag. It only sets that flag once a word has started, so leading spaces don't capitalize the first word.

**3. `ciEmailify` turned extra spaces into extra dots**

*Why:* every space became a dot, so `'Mary  Smith'` gave `mary..smith@codeimmersives.com`, and `' colin jaffe '` gave `.colin.jaffe.@codeimmersives.com`. Neither is a valid address. The easy fix would be `.trim()`, but that's a string method the rules don't allow. Instead the dot is added only when the next word actually starts.

Before:

```js
if(char === ' '){
  newChar = '.'
  email += newChar
}
```

After:

```js
if (char === ' ') {
  needDot = email !== '';
} else {
  if (needDot) {
    email += '.';
    needDot = false;
  }
  email += char.toLowerCase();
}
```

**4. Tidied the code and removed drafts**

*Why:* to make it easier to read without changing what it does. I ran the old and new versions on the same 320 calls and every result matched. The instructor's "don't touch" section is unchanged.

- Removed `sandBox.js` (commented-out drafts of the same functions) and a commented-out `onlyVowels` that used `.indexOf`, a string method the rules don't allow.
- `onlyVowels` now lowercases a copy of each letter, so it checks 5 vowels instead of 10:

  ```js
  // before: 10 checks
  if(char === 'A'|| char === 'a' || char === 'E' || char === 'e' || /* ...6 more */)
  // after: 5 checks
  const lower = char.toLowerCase();
  if (lower === 'a' || lower === 'e' || lower === 'i' || lower === 'o' || lower === 'u')
  ```

- `truncate` now says `str.length <= 18` (same as the old `< 19`), with the reason in a comment. Cutting to 15 characters and adding `...` makes 18, so anything that short wouldn't get any shorter.
- Consistent indentation and semicolons, a one-line comment per function, and clearer names (`number` and `letterCount` instead of reusing `index`).

**5. Updated Jest and added GitHub Actions**

*Why:* the repo used Jest 24 from 2019. `npm audit` on its lock file reports **67 known vulnerabilities (11 critical)** in old sub-dependencies, which is why Dependabot had opened update branches. Jest 29 brings that to **0**. I also added `test:ci` (the instructor's `npm test` is watch mode and never exits) and the Actions workflow behind the badge.

Before:

```json
"scripts": { "test": "jest --watch-all" },
"devDependencies": { "jest": "^24.9.0" }
```

After:

```json
"scripts": { "test": "jest --watch-all", "test:ci": "jest --ci" },
"devDependencies": { "jest": "29.7.0" }
```

**6. This README**

*Why:* to explain the pattern, the fixes, and how to run the tests. The instructor's text below is unchanged.

---

## Original assignment (from the instructor)

### String Theory

### Introduction

Let's use string building!


### Workflow

This is your typical test-run assignment. `jest --watch-all` is your friend!


### Guidelines

* Other than `.toUpperCase` and `.toLowerCase`, don't use any string methods. Sure, `.slice` would be nice here, or `.repeat`. But you'll learn just a ton more if you use actual loops!


### Task

* `xify` - returns the same string, but with every character replaced by an 'x'
  * Examples:
    * xify('hello') -> 'xxxxx'
    * xify('hi there') -> 'xxxxxxxx'
* `yellingChars` - returns the given string with an exclamation point after each character
  * Examples:
    * yellingChars('goodness') -> 'g!o!o!d!n!e!s!s!'
    * yellingChars('oh hello') -> 'o!h! !h!e!l!l!o!'
  * Hints:
    * We can add more than one thing to the string each time through the loop. In this case, it's the current character AND an exlamation point.
* `indexedChars` - adds the index of each character before that character in the given string
  * Examples:
    * indexedChars('hello') -> '0h1e2l3l4o'
    * indexedChars('bye') -> '0b1y2e'
  * Hints: 
    * We can add something BEFORE the current character as well!
* `numberedChars` - adds the number of each character before that character in the given string
  * Examples:
    * numberedChars('hello') -> '(1)h(2)e(3)l(4)l(5)o'
    * numberedChars('bye') -> '(1)b(2)y(3)e'
  * Hints: 
    * there's a simple relationship between the index and the number... indices are 0-based counting and numbers are 1-based... you'll figure it out!
* `exclaim` - returns the given sentence with every question mark or period changed to an exclamation point
  * Examples:
    * exclaim('What are you doing? Are you a fool?') -> 'What are you doing! Are you a fool!'
    * exclaim('This is fine.') -> 'This is fine!'
* `repeatIt` - returns the given string repeated `n` times, where `n` is the second parameter
  * Examples:
    * repeatIt('beetlejuice', 3) -> 'beetlejuicebeetlejuicebeetlejuice'
    * repeatIt('oh hi!', 8) -> 'oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!oh hi!'
* `truncate` - shortens a long string to 15 characters plus an ellipsis (...)
  * Examples:
    * truncate('The fault, dear Brutus, is not in our stars, but in ourselves.') -> 'The fault, dear...'
    * truncate("Well, that's just, like, your opinion man.") -> "Well, that's ju..."
* `ciEmailify` - creates an email from a two-part name
  * Examples:
    * ciEmailify('colin jaffe') -> 'colin.jaffe@codeimmersives.com'
    * ciEmailify('Anthony DeRosa') -> 'anthony.derosa@codeimmersives.com'
* `reverse` - reverses the given string
  * Examples:
    * reverse('colin') -> 'niloc'
    * reverse('mesuara') -> 'arausem'
* `onlyVowels` - returns only the vowels from a word
  * Examples:
    * onlyVowels('Colin Jaffe') -> 'oiae'
    * onlyVowels('quickly') -> 'ui'
    * onlyVowels('Anthony DeRosa') -> 'Aoeoa'
* `crazyCase` - returns the given string with alternating lower and upper cases
  * Examples:
    * crazyCase('hello') -> 'hElLo'
    * crazyCase('multiple words here') -> 'mUlTiPlE WoRdS HeRe'
    * crazyCase('YELLING') -> 'yElLiNg'
* `titleCase` - returns a transformed version of the given string where every word starts with a capital letter and every non-word-starting letter is lowercased
  * Examples:
    * titleCase('return of the king') -> 'Return Of The King'
    * titleCase('cOde iMMerSives') -> 'Code Immersives'
* `camelCase` - returns the given string in camel case
  * Examples:
    * camelCase('oh Hello') -> 'ohHello'
    * camelCase('well yeah of course') -> 'wellYeahOfCourse'
    * camelCase('Boy howdy') -> 'boyHowdy'
* `crazyCase2ReturnOfCrazyCase` - same as `crazyCase`, but does NOT count spaces as letters to upper or lower case (see examples below!)
  * Examples:
    * crazyCase2ReturnOfCrazyCase('multiple words here') -> 'mUlTiPlE wOrDs HeRe'
    * crazyCase2ReturnOfCrazyCase('crazy stuff') -> 'cRaZy StUfF'
