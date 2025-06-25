// 5.  Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit

const taskQueue = (concurrency) =>{
    const queue = [];
    let currentTasks = 0;

    const next = () =>{
        if(currentTasks >= concurrency || queue.length ==0){
            return
        }
        const {task,resolve,reject} = queue.shift();
        currentTasks++;

        task()
        .then(resolve)
        .catch(reject)
        .finally(()=>{
            currentTasks--;
            next();
        })
    }
    const add = (task) => {
        return new Promise((resolve,reject)=>{
            queue.push({task,resolve,reject});
            next();
        })
    }
    return {add}
} 

const limiter = taskQueue(2);

const apiCall = (id, duration)=>{
    return () => new Promise((r) => {
        console.log(`task ${id} started`);
        setTimeout(()=>{
            console.log(`Task ${id} eneded`);
            r();
        }, duration)
    })
}

for(let i =0; i < 5; i++){
    limiter.add(apiCall(i, 1000));
}


