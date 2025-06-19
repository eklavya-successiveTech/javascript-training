// 7. Create a function that performs multiple asynchronous operations in parallel using async/await and waits for all of them to complete before returning the results.

const p1 = new Promise((resolve)=>{
    setTimeout(()=> resolve("P1 resolved "), 1000)
})

const p2 = new Promise((resolve)=>{
    setTimeout(()=> resolve("P2 resolved "), 5000)
})

const p3 = new Promise((resolve)=>{
    setTimeout(()=> resolve("P3 resolved "), 2000)
})

async function multiAsyncOperations(p1,p2,p3) {
    const result = await Promise.all([p1,p2,p3]);
    return result;
} 
multiAsyncOperations(p1,p2,p3).then((data)=> console.log(data));