// 1. Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)

function fetchData(callback) {
  async function getData() {
    try {
      const response = await fetch('https://api.sampleapis.com/coffee/hot');

      if (!response.ok) {
        return callback(`HTTP Error: ${response.status}`, null);
      }

      const data = await response.json();
      callback(null, data);
    } catch (error) {
      callback(error.message, null);
    }
  }

  getData();
}

function handleResult(err, data) {
  if (err) {
    console.error('Callback Error:', err);
  } else {
    console.log('Callback Data:', data);
  }
}

fetchData(handleResult);
