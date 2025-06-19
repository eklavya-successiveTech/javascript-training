// 2. Give an example of using multiple callback functions in a single function in JavaScript

function func1(func2, func3, func4) {
  setTimeout(() => {
    func2(() => func3(func4));
  }, 2000);
}

function func2(callback) {
  callback();
}

function func3(callback) {
  callback();
}

function func4() {
  console.log("Callback done");
}

func1(func2, func3, func4);
