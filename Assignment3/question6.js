// 6. Write a program to display prime numbers from 1 to 50

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true;
}

function printPrimesUpTo50() {
    for (let i = 2; i <= 50; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

printPrimesUpTo50();
