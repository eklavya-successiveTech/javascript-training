//5. Write a program to print all even number first and then all odd numbers using only one iteration

const evenThenOdd = (limit) =>{
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
    const mergedArray = even.concat(odd);
    return mergedArray;
}
let limit =10;
console.log(evenThenOdd(limit));