// Write a function expression that takes in another function as an argument
const func = function(func2){
    func2();
}

function func2(){
    return 1;
}