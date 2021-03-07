/******************
 * YOUR CODE HERE *
 ******************/

 //-----xify-----
function xify(str){
let xStr = ''
  for (const char of str){
      xStr += 'x'
  }
return xStr
}

 //-----yellingChars-----
 function yellingChars(str){
  let newStr = '';
  
  for (const char of str){
    newStr += `${char}!`
  }
  return newStr;
}

//-----indexedChars-----
function indexedChars(str){
  let newStr = ''
  let index = -1
  for (const char of str){
    index += 1 
    newStr += index + char
  }
  return newStr
}
 
//-----numberedChars-----

function numberedChars(str){
  let newStr = ''
  let index = 0
  for (const char of str){
    index += 1 
    newStr += `(${index})` + char
  }
  return newStr
}

//-----exclaim-----

function exclaim(str){
  newStr = ''
  for (const char of str){
    if(char === '?' || char === '.'){
      newStr += '!'
    }
    else{
      newStr += char
    }
  }
  return newStr
}


//-----repeatIt-----
function repeatIt(str, n){
  newStr = ''
  for (i=0;i<n;i++){
  newStr += str 
  }
  return newStr
  }

//-----truncate-----
function truncate(str){
  let newStr = ''
  if (str.length < 19){
    return str
  }
  else{
    for (i=0;i<15;i++){
    newStr += str[i]
  }
}
newStr += '...'
return newStr
  
}

//-----ciEmailify-----
function ciEmailify(name){
  let email = ''
  let newChar = ''
  for(const char of name){
    if(char === ' '){
      newChar = '.'
      email += newChar
    }
    else{
      newChar = char.toLowerCase();
      email += newChar
    }  
  }
  return email += '@codeimmersives.com'
}

//-----reverse-----
function reverse(str){
  let newStr = ''
  
  for (let i= (str.length - 1) ; i > (-1);i--){
  newStr += str[i]
  }
  return newStr
}


//-----onlyVowels-----

// function onlyVowels(str) {
//   let vowelList = 'AEIOUaeiou'
//   let newStr = '';
  
//    for(var i = 0; i < str.length ; i++)
//     {
//       if (vowelList.indexOf(str[i]) !== -1)
//       {
//           newStr += str[i];
//       }
//     }
//     return newStr;
//   }

function onlyVowels(str){
  let newStr = ''
  for (const char of str){
    if(char === 'A'||
      char === 'a' ||
      char === 'E' ||
      char === 'e' ||
      char === 'I' ||
      char === 'i' ||
      char === 'O' ||
      char === 'o' ||
      char === 'U' ||
      char === 'u' ){
          newStr += char
      }
  }
  return newStr
}

//-----crazyCase-----
function crazyCase(str){
  let newStr = ''
  for (i = 0; i < str.length; i++){
if(i % 2 === 0){
  newStr += str[i].toLowerCase()
}
else{
  newStr += str[i].toUpperCase()
}
  }
  return newStr
}

//-----titleCase-----
function titleCase(str){
  let newStr = ''
  for (i = 0; i < str.length; i++){
  if(i === 0){
      newStr += `${str[i].toUpperCase()}`
      
  }
  else if(str[i] === ' '){
      newStr += ` ${str[i+1].toUpperCase()}`
      i += 1
  }
  else{
      newStr += str[i].toLowerCase()
  }
  }
  return newStr
}

//-----camelCase-----

function camelCase(str){
  let newStr = ''
  for (i = 0; i < str.length; i++){

  if(str[i] === ' '){
      newStr += `${str[i+1].toUpperCase()}`
      i += 1
  }
  else{
      newStr += str[i].toLowerCase()
  }
  }
  return newStr
}

//-----crazyCase2ReturnOfCrazyCase-----

function crazyCase2ReturnOfCrazyCase(str){
  let newStr = "";
  let charIndex = 0;
  for (const char of str) {
      
      if (char === " ") {
          newStr += ' '
          continue;
      }

      
      if (charIndex % 2 === 0) {
          newStr += char.toLowerCase();
      } else {
          newStr += char.toUpperCase();
      }
      
      charIndex += 1;
  }
  
  return newStr 
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
