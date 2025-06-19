//2.Write a program to reverse a string ("Hello John" => "olleH nhoJ")

function Reverse(str){
    let start = 0;
    let arr = str.split('');
    for(let i=0; i<arr.length; i++){
        if(arr[i] == " " || i == (arr.length-1)){
            let x = start;
            let y = (arr[i] == " ")? i-1:i;
            while(x<y){
                let temp = arr[x];
                arr[x] = arr[y];
                arr[y] = temp;
                x++;
                y--;
            }
            start = i+1;
        }
    }
    return arr.join('');
}

function reverseString(str) {
  return str.split(' ').map(word=> word.split('').reverse().join('')).join(' ');
}

console.log(Reverse("Hello John"))
console.log(reverseString("Hello John"));  

