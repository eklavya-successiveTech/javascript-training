//2. Write a program to sort an array of object on the basis of age ({name:"John", age:26})

const people = [
    { name: "Jhon", age : 26},
    { name: "Eklavya", age : 21},
    { name: "Rahul", age : 25}
]

const sortObj = (arr) =>{
    for(let i = 0; i < arr.length-1; i++){
    for(let j = 0; j < arr.length - i - 1; j++){
        if( arr[j].age > arr[j+1].age){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] =  temp;
        }
    }
}
    return arr;
}
console.log(sortObj(people));
