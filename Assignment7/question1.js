// 1. Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)

function fetchData(callback) { 
    const response = fetch('https://api.sampleapis.com/coffee/hot');
    const status = response.statusText;
    if (status == 'OK'){
        callback(null, response.data)
    }
    else{
        callback(err, null)   
    }
}
function callback(err, data){
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
}