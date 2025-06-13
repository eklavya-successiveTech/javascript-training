//5. Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.
// const obj = {
//    a: 1,
//    b: { c: 2, d: [3, 4] }
// };
// Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }

const result = {};
const flattenObject = (obj)=>{
    for( let properties in obj){
        if(typeof obj[properties] == "object"){
            flattenObject(obj[properties]); 
        }
        result[properties] = obj[properties];
    }
    return result;
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
