//2. let myObject = { name: 'John', age: 30 };
// for (property in myObject) {
//    console.log(property + ': ' + myObject.property);
// }

// Ans. property in for loop is not defined so myObject.property wont work

// Correct version
let myObject = { name: 'John', age: 30 };
for (property in myObject) {
   console.log(property + ': ' + myObject[property]);
}