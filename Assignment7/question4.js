// 4. Write a program to implement a Promise-based rate limiter, that limits the number of concurrent requests to a certain number

const rateLimiter = (limit) =>{
    let currentTasks = 0;
    let queue = [];

    function run (task){
        return new Promise((resolve,reject)=>{
            const execute = () =>{
                currentTasks += 1;

                task()
                .then(resolve)
                .catch(reject)
                .finally(()=>{
                    currentTasks--;
                    if(queue.length > 0){
                        const next = queue.shift();
                        next();
                    }
                })

            }
            if(currentTasks < limit){
                execute();
            }
            else if(currentTasks >= limit){
                queue.push(execute);
            }
        })
    }

    return {run};
}


const limiter = rateLimiter(2);

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
    limiter.run(apiCall(i, 1000));
}


