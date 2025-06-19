//4. Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.

const deepClone = (obj)=>{
    const res = JSON.parse(JSON.stringify(obj));
    return res;
}

const employee = {
    name : "Eklavya",
    age : 21,
    home : "Udhampur",
    team : {
        1 : "Client1",
        2 : "Client2",
        3 : "Client3"
    }
}
const newObject = deepClone(employee);
console.log(newObject);
newObject.name = "Anuj";
newObject.team[1] = "Clinet4";
console.log(newObject);
console.log(employee);