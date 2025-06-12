//1. Write a program to perform functionality of a calculator (add,sub,multiply,divide)
const sum =(num1,num2) =>{
    return num1+num2;
}

const sub =(num1,num2) =>{
    return num1-num2;
}

const multiply =(num1,num2) =>{
    return num1*num2;
}

const divide =(num1,num2) =>{
    return num1/num2;
}

console.log("Sum: " + sum(2, 4));       
console.log("Subtraction: " + sub(2, 4)); 
console.log("Division: " + divide(2, 4));  
console.log("Multiplication: " + multiply(2, 4));