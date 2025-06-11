//3. Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")

function countCheck(str){
    let count = new Map();
    let result = "";
    for(let i =0; i<str.length; i++){
        if(!count.has(str[i])){
            count.set(str[i],1);
        }
        else{
            count.set(str[i], count.get(str[i]) + 1);
        }
    }
    for (let [char, freq] of count) {
        result += char + freq;
    }
    return result;
}

console.log(countCheck("eklavya"));
