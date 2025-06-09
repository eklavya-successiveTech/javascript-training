// Write a program to give a random output between 1 to 10 (AC: 2 simultaneous answers could not be same)
let y = null;
function randomNumber(a,b){
    let x = Math.floor(Math.random()*(b-a+1))+1;
    if(x == y){
        randomNumber(a,b);
    }
    else{
        y = x;
    console.log(x);
    return x;
    }
    
}
randomNumber(1,10);
randomNumber(1,10);
randomNumber(1,10);
randomNumber(1,10);