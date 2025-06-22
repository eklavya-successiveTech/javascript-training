// 1. Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)

function fetchData(callback) {
    fetch('https://api.sampleapis.com/coffee/hot')
        .then(response => {
            if (!response.ok) {
                callback(`Error: ${response.status}`, null);
            } else {
                return response.json();
            }
        })
        .then(data => {
            callback(null, data);
        })
        .catch(error => {
            callback(error, null);
        });
}

function callback(err, data) {
    if (err) {
        console.error('Callback Error:', err);
    } else {
        console.log('Callback Data:', data);
    }
}

fetchData(callback);
