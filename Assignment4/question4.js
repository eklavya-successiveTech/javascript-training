//4. Write a program to convert given string to upperCase OR lowerCase


function upperCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if (code >= 97 && code <= 122) {
            result += String.fromCharCode(code - 32);
        } else {
            result += str[i];
        }
    }
    return result;
}

function lowerCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if (code >= 65 && code <= 90) { 
            result += String.fromCharCode(code + 32);
        } else {
            result += str[i];
        }
    }
    return result;
}

console.log(upperCase("Hello World!")); 
console.log(lowerCase("Hello World!")); 
