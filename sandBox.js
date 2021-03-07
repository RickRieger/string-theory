// function yellingChars(str){
//     let newStr = ''
//     for (let char of str){
//       newStr += (char += '!')
//     }
//     return newStr
//   }

//   let x = yellingChars('hello')
//   x

// function indexedChars(str){
//     let newStr = ''
//     let index = -1
//     newChar = ''
//     for (let char of str){
//       index += 1 
//       newStr += index + char
//     }
//     return newStr
//   }

// function numberedChars(str){
//     let newStr = ''
//     let index = 0
//     for (let char of str){
//       index += 1 
//       newStr += `(${index})` + char
//     }
//     return newStr
//   }


// function exclaim(str){
//     newStr = ''
//     for (let char of str){
//       if(char === '?' || char === '.'){
//         newStr += '!'
//       }
//       else{
//         newStr += char
//       }
//     }
//     return newStr
//   }

// function repeatIt(str, n){
//     newStr = ''
//     for (i=0;i<n;i++){
//     newStr += str 
//     }
//     return newStr
//     }

// function truncate(str){
//     let newStr = ''
//     for (i=0;i<15;i++){
//       newStr += str[i]
//     }
//   newStr += '...'
//   return newStr
    
//   }

//   let x = truncate('hello how are you doing today my fine man?')
//   x

// function ciEmailify(name){
//     let email = ' '
//     let newChar = ' '
//     for(const char of name){
//       if(char === ' '){
//         newChar = '.'
//         email += newChar
//       }
//       else{
//         newChar = char.toLowerCase();
//         email += newChar
//       }  
//     }
//     return email += '@codeimmersives.com'
//   }

//   let x = ciEmailify('RIck Rieger')
//   x

// function yellingChars(str){
//     let newStr = '';
    
//     for (const char of str){
//       newStr += `${char}!`
//     }
//     return newStr;
//   }

//   let x = yellingChars('oh my god');
//   x

// function reverse(str){
//     let newStr = ''
    
//     for (let i= (str.length - 1) ; i > (-1);i--){
//     newStr += str[i]
//     }
//     return newStr
//   }

//   let x = reverse('richard rieger')
//   x 

// function onlyVowels(str) {
//     let vowelList = 'AEIOUaeiou'
//     let newStr = '';
    
//      for(var i = 0; i < str.length ; i++)
//       {
//         if (vowelList.indexOf(str[i]) !== -1)
//         {
//             newStr += str[i];
//         }
//       }
//       return newStr;
//     }

// function onlyVowels(str){
//     let newStr = ''
//     for (const char of str){
//       if(char === 'A'||
//         char === 'a' ||
//         char === 'E' ||
//         char === 'e' ||
//         char === 'I' ||
//         char === 'i' ||
//         char === 'O' ||
//         char === 'o' ||
//         char === 'U' ||
//         char === 'u' ){
//             newStr += char
//         }
//     }
//     return newStr
//   }


// function vowel(str) {
//     let newStr = ''
//     const matches = str.match(/[aeiou]/g);
//     return newStr += matches ;
//   }
  
//   //Try it
//   console.log(vowel('aeiou'));

// function crazyCase(str){
//     let newStr = ''
//     for (i = 0; i < str.length; i++){
//   if(i % 2 === 0){
//     newStr += str[i].toLowerCase()
//   }
//   else{
//     newStr += str[i].toUpperCase()
//   }
//     }
//     return newStr
//   }

// function titleCase(str){
//     let newStr = ''
//     for (i = 0; i < str.length; i++){
//     if(i === 0){
//         newStr += `${str[i].toUpperCase()}`
        
//     }
//     else if(str[i] === ' '){
//         newStr += ` ${str[i+1].toUpperCase()}`
//         i += 1
//     }
//     else{
//         newStr += str[i].toLowerCase()
//     }
//     }
//     return newStr
// }


// function camelCase(str){
//     let newStr = ''
//     for (i = 0; i < str.length; i++){
//     if(i === 0){
//         newStr += `${str[i].toLowerCase()}`
        
//     }
//     else if(str[i] === ' '){
//         newStr += ` ${str[i+1].toUpperCase()}`
//         i += 1
//     }
//     else{
//         newStr += str[i].toLowerCase()
//     }
//     }
//     return newStr
// // }
// let x= camelCase('heLLo Yo mE')
//     x 



function crazyCase2ReturnOfCrazyCase(str){
    let newStr = "";
    let charIndex = 0;
    for (const char of str) {
        
        if (char === " ") {
            newStr += ' '
            continue;
        }

        
        if (charIndex % 2 === 0) {
            newStr += char.toUpperCase();
        } else {
            newStr += char.toLowerCase();
        }
        
        charIndex += 1;
    }
    
    return newStr 
}


let x = crazyCase2ReturnOfCrazyCase('hello my name is rick')
  x


// Andy Choe6:46 PM
// function WeIrDcAsE(string) {
//   let isUpperCase = true;
//   let result = '';
//   for (let character of string) {

//     if (isUpperCase) {
//       result += character.toUpperCase();
//     } else {
//       result += character.toLowerCase();
//     }

//     if (character.match(/[a-zA-Z]/)) {
//       isUpperCase = !isUpperCase;
//     } else {
//       isUpperCase = true;
//     }
//   }
  
//   return result;
// }

 
  