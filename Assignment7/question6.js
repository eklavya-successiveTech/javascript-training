// 6. Implement a function that returns a resolved Promise after a specified delay using async/await.

async function promiseResolver() {
    const data = await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Done")
        },2000)
    });
    return data;
} 
promiseResolver ().then((data)=> console.log(data));