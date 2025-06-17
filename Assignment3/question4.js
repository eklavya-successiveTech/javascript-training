//4. Write a program to print all even number first and then all odd numbers

let limit =10;
const even =[];
const odd = [];
for(let i =1; i <= limit; i++){
    if(i%2 == 0){
        even.push(i);
    }
    else{
        odd.push(i);
    }
}

console.log(even);
console.log(odd);