//9. Write a program to find the last duplicate index in an array

// assuming we have to find last ever duplicate in the array

const dupes = new Map();

const findDupe = (arr)=>{
    let x;
    for(let i =0; i < arr.length; i++){
        if(!dupes.has(arr[i])){
            dupes.set(arr[i],true);
        }
        else{
            x = i;
        }
    }
    return x;
}
const arr = [1,3,3,4,5,6];
console.log(findDupe(arr));