//6. Write a program to find sum of an array using reduce method

const arr = [1,2,3,4,5,6];

const Total = arr.reduce( (previousValue, currentValue)=> previousValue + currentValue, 0);
console.log(Total);