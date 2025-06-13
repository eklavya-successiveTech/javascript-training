//1. Write a program to iterate over object.

const employee = {
    name : "Eklavya",
    age : 21,
    home : "Udhampur"
}

for( let element in employee){
    console.log(element + " : " + employee[element])
}