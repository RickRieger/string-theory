/******************
 * YOUR CODE HERE *
 ******************/

// The rules: no string methods except .toUpperCase and .toLowerCase,
// so every answer builds a new string one character at a time.

//-----xify-----
function xify(str) {
  let xStr = '';
  for (const char of str) {
    xStr += 'x';
  }
  return xStr;
}

//-----yellingChars-----
function yellingChars(str) {
  let newStr = '';
  for (const char of str) {
    newStr += `${char}!`;
  }
  return newStr;
}

//-----indexedChars-----
function indexedChars(str) {
  let newStr = '';
  let index = 0;
  for (const char of str) {
    newStr += `${index}${char}`;
    index++;
  }
  return newStr;
}

//-----numberedChars-----
// numbers count from 1, indexes from 0
function numberedChars(str) {
  let newStr = '';
  let number = 1;
  for (const char of str) {
    newStr += `(${number})${char}`;
    number++;
  }
  return newStr;
}

//-----exclaim-----
function exclaim(str) {
  let newStr = '';
  for (const char of str) {
    if (char === '?' || char === '.') {
      newStr += '!';
    } else {
      newStr += char;
    }
  }
  return newStr;
}

//-----repeatIt-----
function repeatIt(str, n) {
  let newStr = '';
  for (let i = 0; i < n; i++) {
    newStr += str;
  }
  return newStr;
}

//-----truncate-----
// Cutting to 15 characters and adding '...' makes 18, so a string of 18 or
// fewer characters wouldn't get any shorter: return it unchanged.
function truncate(str) {
  if (str.length <= 18) {
    return str;
  }
  let newStr = '';
  for (let i = 0; i < 15; i++) {
    newStr += str[i];
  }
  return newStr + '...';
}

//-----ciEmailify-----
// A dot goes between words, added only when the next word starts,
// so extra spaces (leading, trailing or doubled) never turn into extra dots.
function ciEmailify(name) {
  let email = '';
  let needDot = false;
  for (const char of name) {
    if (char === ' ') {
      needDot = email !== '';
    } else {
      if (needDot) {
        email += '.';
        needDot = false;
      }
      email += char.toLowerCase();
    }
  }
  return email + '@codeimmersives.com';
}

//-----reverse-----
// walk the indexes backwards, from the last one down to 0
function reverse(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

//-----onlyVowels-----
// lowercase a copy of each letter so 'A' and 'a' need only one check
function onlyVowels(str) {
  let newStr = '';
  for (const char of str) {
    const lower = char.toLowerCase();
    if (lower === 'a' || lower === 'e' || lower === 'i' || lower === 'o' || lower === 'u') {
      newStr += char;
    }
  }
  return newStr;
}

//-----crazyCase-----
// even indexes lowercase, odd indexes uppercase (spaces count)
function crazyCase(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      newStr += str[i].toLowerCase();
    } else {
      newStr += str[i].toUpperCase();
    }
  }
  return newStr;
}

//-----titleCase-----
// A letter starts a word if it comes first or right after a space.
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

//-----camelCase-----
// Drop the spaces; capitalize the first letter of every word except the first.
function camelCase(str) {
  let newStr = '';
  let capitalizeNext = false;
  for (const char of str) {
    if (char === ' ') {
      // only after a word has started, so leading spaces don't capitalize the first word
      capitalizeNext = newStr !== '';
    } else if (capitalizeNext) {
      newStr += char.toUpperCase();
      capitalizeNext = false;
    } else {
      newStr += char.toLowerCase();
    }
  }
  return newStr;
}

//-----crazyCase2ReturnOfCrazyCase-----
// like crazyCase, but spaces are copied without counting as letters
function crazyCase2ReturnOfCrazyCase(str) {
  let newStr = '';
  let letterCount = 0;
  for (const char of str) {
    if (char === ' ') {
      newStr += char;
    } else {
      if (letterCount % 2 === 0) {
        newStr += char.toLowerCase();
      } else {
        newStr += char.toUpperCase();
      }
      letterCount++;
    }
  }
  return newStr;
}




 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
