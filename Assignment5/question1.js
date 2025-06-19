//1. Write a program to iterate over object.

const employee = {
    name : "Eklavya",
    age : 21,
    home : "Udhampur"
}

Object.keys(employee).forEach(key => {
    console.log(`${key} : ${employee[key]}`);
});
