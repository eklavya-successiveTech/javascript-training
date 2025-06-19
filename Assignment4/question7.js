//7. Write a program to find index of duplicate elements in an array

const findDupes = (arr)=>{
    const dupes = new Map();
    const duplicates = [];
    for(let i =0; i<arr.length; i++){
        if(!dupes.has(arr[i])){
            dupes.set(arr[i],true);
        }
        else{
            duplicates.push(i);
        }
    }
    return duplicates;
}
const arr = [1,3,3,4,5,4];
console.log(findDupes(arr));
