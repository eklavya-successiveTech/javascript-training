// 2. Give an example of using multiple callback functions in a single function in JavaScript

function firstCallback(next) {
  setTimeout(() => {
    console.log("First callback done");
    next();
  }, 1000);
}

function secondCallback(next) {
  setTimeout(() => {
    console.log("Second callback done");
    next();
  }, 1000);
}

function thirdCallback() {
  console.log("Third callback done");
}

function startProcess() {
  firstCallback(() => {
    secondCallback(() => {
      thirdCallback();
    });
  });
}

startProcess();
