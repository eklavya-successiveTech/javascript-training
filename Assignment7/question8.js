// 8. Create a function that fetches data from multiple APIs in parallel and then performs some operation on the combined data, using async/await.

const url1 = 'https://api.sampleapis.com/coffee/hot';
const url2 = 'https://api.sampleapis.com/futurama/info';
const url3 = 'https://api.sampleapis.com/switch/games';


async function operationOnAPI1 (){
    const response = await fetch(url1);
    return response
};
async function operationOnAPI2 (){
    const response = await fetch(url2);
    return response;
};
async function operationOnAPI3 (){
    const response = await fetch(url3);
    return response;
};

function operation (){
  const data = Promise.all([operationOnAPI1(),operationOnAPI2(),operationOnAPI3()]);
  return data;
}
operation().then(data => console.log( data))