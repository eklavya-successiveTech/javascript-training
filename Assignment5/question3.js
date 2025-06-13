//3. Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

const people = [
  { name: "John", age: 27, id: 1 },
  { name: "Alice", age: 30, id: 2 },
  { name: "Bob", age: 25, id: 3 }
];

for(let i = 0; i < people.length; i++){
  delete people[i].id;
}
console.log(people)