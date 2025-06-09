// All of the above questions from 3-6 needs to be done with arrow functions also

// 3rd question using arrow function

const func = (func2) =>{
    func2();
}

function func2(){
    return 1;
}

// 4th question using arrow function

const sqr = (a) =>{
    console.log(a*a);
    return a*a;
}
sqr(2);

// 5th question using arrow function

const sum = (a,b) =>{
    console.log(a+b);
    return a+b;
}
sum(1,2);

// 6th question using arrow function

const check = (a) =>{
    if(a % 2 == 0){
        console.log(true);
        return true;
    }
    else{
        console.log(false);
        return false;
    }
}
check(3);
check(2);