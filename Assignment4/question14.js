//14. Write a program to reverse an array

const rev = (arr) => {
    let start =0;
    let end = arr.length -1;

    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = arr[temp];
        start++;
        end--;
    }
    return arr;
}
const arr = [1,2,3,4,5,6];
console.log(rev(arr));