//12. Write a program to display intersection of two array

const intersection = (arr1, arr2)=>{
    const match = new Map();
    const result = [];

    for(let i = 0; i < arr1.length; i++){
        match.set(arr1[i] , false);
    }
    for(let y = 0; y < arr2.length; y++){
        if(match.has(arr2[y]) && match.get(arr2[y]) === false){
            result.push(arr2[y]);
            match.set(arr2[y], true);
        }
    }

    return result;
}
console.log(intersection([1, 2, 3, 4], [2, 3, 3, 5])); 
