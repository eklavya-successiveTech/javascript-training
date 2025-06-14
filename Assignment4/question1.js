//1. Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")

function removeDupes(str){
    let newStr = "";
    const dupes = new Map();
    for(let i =0; i<str.length;i++){
        if(!dupes.has(str[i])){
            dupes.set(str[i], true);
            newStr += str[i];
        }
    }
    console.log(newStr)
    return newStr;
}

removeDupes("Hello Yellow");