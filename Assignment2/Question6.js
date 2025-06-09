// Write a function expression that takes in a number and returns true if it's even and false if it's odd.

const check = function(a){
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