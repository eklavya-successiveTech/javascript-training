// All of the above questions from 3-6 needs to be done with arrow functions also

// 3rd question using arrow function

const func = (func2) =>{
    func2();
}

function func2(){
    return 1;
}

// 4th question using arrow function

const sqr = (num) =>{
    return num*num;
}
console.log(sqr(2));

// 5th question using arrow function

const sum = (num1,num2) =>{
    return num1+num2;
}
console.log(sum(1,2));

// 6th question using arrow function

const check = (num) =>{
    if(num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(check(3));
console.log(check(6));