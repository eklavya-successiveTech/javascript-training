//13. Write a program to return inverse of an array

const inverse = (arr) => {
    let res = [];
    for(let i = arr.length - 1; i >= 0; i--){
        res.push(arr[i]);
    }
    return res;
}

const arr = [1,2,3,4,5,6];
console.log(inverse(arr));