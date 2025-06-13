// Write a function to take input(age, name, phone no.) from user and display it

const readline = require('readline');

function getDetails() {
  const inputPrompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  inputPrompt.question("Enter your name: ", function(name) {
    inputPrompt.question("Enter your age: ", function(age) {
      inputPrompt.question("Enter your phone number: ", function(phone) {
        console.log(`Name: ${name}, Age: ${age}, Phone No: ${phone}`);
        inputPrompt.close();
      });
    });
  });
}


getDetails();
