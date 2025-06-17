// 7. Write a program to display the twice of a number starting from 2 and end at 4096 (2, 4, 8, 16, ..... 4096)

let number = 1;

while(number < 4096){
    console.log(2*number);
    number *= 2;
}