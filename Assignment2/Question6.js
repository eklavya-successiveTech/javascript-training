// Write a function expression that takes in a number and returns true if it's even and false if it's odd.

const check = function(num){
    if(num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(check(89));
console.log(check(80));