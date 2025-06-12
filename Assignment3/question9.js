// 9. Write a program to print fibonaaci series
function fibonacciSeries(n) {
    let num1 = 0, num2 = 1;
    console.log(num1);  
    
    for (let i = 1; i < n; i++) {
        console.log(num2);
        let next = num1 + num2;
        num1 = num2;
        num2 = next;
    }
}

fibonacciSeries(10);
