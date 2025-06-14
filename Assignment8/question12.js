// 12. async function getData() {
//    setTimeout(function() { return [1, 2, 3, 4, 5]; }, 1000); }
// getData().then(function(data) {
//    console.log(data);
// });


// Ans: getData isnt returning anything hence it will return a promise which resolve to undefined

// correct version
async function getData() {
    return new Promise((resolve,reject)=>{
        setTimeout(function() { resolve([1, 2, 3, 4, 5]); }, 1000)
    }
); 
}

getData().then(function(data) {
   console.log(data);
});
