// 8. Create a function that fetches data from multiple APIs in parallel and then performs some operation on the combined data, using async/await.

async function operationOnAPI (){
    const responses = await Promise.all([fetch('https://api.sampleapis.com/coffee/hot'),fetch('https://api.sampleapis.com/futurama/info'),fetch('https://api.sampleapis.com/switch/games')]);
    const newResponse = responses.map((element) => element.statusText);
    return newResponse;
}
operationOnAPI().then(data => console.log( data))