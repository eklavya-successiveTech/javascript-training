//5. Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)

function toCamelCase(str){
  return str.split(' ').map(function(word,index){
    if(index == 0){
      return word.toLowerCase();
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
}

console.log(toCamelCase("camel case"));