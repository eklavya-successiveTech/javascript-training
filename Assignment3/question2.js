// 2. Write a program to display following output as shown in figure

// 1
// 2 3
// 4 5 6
// 7 8 9 10

// 1
// 2 2
// 3 3 3
// 4 4 4 4

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

const firstPattern = ()=>{
     let rows = 4;
     let element = 1;
    let pattern = "";      
    for (let i = 1; i <= rows; i++){    
        for (let j = 1; j <= i; j++){      
            pattern += element + " ";  
            element++;
        }
        pattern += "\n";    
    }
    return pattern;
}


const secondPattern = ()=>{
    let rows = 4;
    let pattern = "";      
    for (let i = 1; i <= rows; i++){    
        for (let j = 1; j <= i; j++){      
            pattern += i + " ";  
        }
        pattern += "\n";    
    }
    return pattern; 
}


const thirdPattern = ()=>{
    let pattern = "";
    for(let i =5; i>=1; i--){
        for(let j =1; j <=i; j++){
            pattern += j + " ";
        }
        pattern += "\n";
    }
    for(let i =2; i<=5; i++){
        for(let j =1; j <=i; j++){
            pattern += j + " ";
        }
        pattern += "\n";
    }
    return pattern; 
}

console.log(firstPattern());
console.log(secondPattern());
console.log(thirdPattern());