// 7. for (var i = 0; i < 10; i++) {
// setTimeout(function() { console.log(i); }, 1000); }

// Ans: It wont print different values of i, bcz var has a global scope and when settimeouts will start resolving at that time i will have the value of 10. SO 100 will be printed 10 times

// Correct version( in order to print distinct values of i)
for (let i = 0; i < 10; i++) {
setTimeout(function() { console.log(i); }, 1000); 
}