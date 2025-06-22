// 8. Create a function that fetches data from multiple APIs in parallel and then performs some operation on the combined data, using async/await.

const url1 = 'https://api.sampleapis.com/coffee/hot';
const url2 = 'https://api.sampleapis.com/futurama/info';
const url3 = 'https://api.sampleapis.com/switch/games';

async function operationOnAPI (){
    const responses = await Promise.all([
  fetch(url1),
  fetch(url2),
  fetch(url3)
]);

const dataArrays = await Promise.all(
  responses.map(response => response.json())
);
    return dataArrays;
}
operationOnAPI().then(data => console.log( data))