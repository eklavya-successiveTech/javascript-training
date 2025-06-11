//8. Write a program to remove dupliacte elements from an array

const removeDuplicates = (arr)=>{
    const dupes = new Map();
    const result = [];
    for(let i =0; i<arr.length; i++){
        if(!dupes.has(arr[i])){
            dupes.set(arr[i],true);
            result.push(arr[i]);
        } 
    }
    return result;
}
const arr = [1,3,3,4,5,4];
console.log(removeDuplicates(arr));