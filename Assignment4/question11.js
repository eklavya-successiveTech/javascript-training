//11. Write a program to sort an array (bubble sort)

const bubbleSort = (arr)=>{
    for(let i = 0; i < arr.length; i++){
        for(let y = 0; y < (arr.length - i -1); y++){
            if(arr[y] > arr[y+1]){
                let temp = arr[y];
                arr[y] = arr[y+1];
                arr[y+1] = temp;
            }
        }
    }
    return arr;
}

const arr = [234, 43, 55, 63, 5, 6, 235, 547];
console.log(bubbleSort(arr));