//5. Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.
// const obj = {
//    a: 1,
//    b: { c: 2, d: [3, 4] }
// };
// Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }

const flattenObject = (obj) => {
  const flattened = {};
  const process = (currentPart, path) => {
    if (typeof currentPart === 'object' && currentPart !== null) {
      for (const key in currentPart) {
        const newPath = path ? `${path}.${key}` : key;
        process(currentPart[key], newPath);
      }
    } else {
      flattened[path] = currentPart;
    }
  };
  process(obj, '');
  return flattened;
};

const obj = {
   a: 1,
   b: { c: 2, d: [3, 4] }
};

const result = flattenObject(obj);
console.log(result);

const employee = {
    name: "Eklavya",
    age: 21,
    home: "Udhampur",
    team: {
        1: "Client1",
        2: "Client2",
        3: "Client3"
    }
};

const flatEmployee = flattenObject(employee);
console.log(flatEmployee);