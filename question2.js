// 2.Install the lodash package using npm install lodash. and use any of its function

const arr = [1,2,3,4,5]
const _ = require('lodash');

let reversed = _.reverse([...arr]);

console.log(arr);
console.log(reversed);