//10. Write a program to concatenate an input of array of arrays

const arr = [[1,2],[3,4],3,4,[5,6,[8,9]]];
const result = [];

const concatenate = (arr)=>{
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            concatenate(arr[i]);
        }
        else{
            result.push(arr[i]);
        }
    }
    return result;
    
}
console.log(concatenate(arr));