const fs = require("fs");
const { setTimeout } = require("timers/promises");

// creating my own Async function using Promises
// It is just a class that makes callbacks and async functions slightly more readable
// Whenever u create it, you need to pass in a function as the first argument which has resolve as th
// First argument

function YeswanthReadFile() {
  console.log("Inside Yeswanth Read file");
  return new Promise(function (resolve) {
    console.log("Inside Promise");
    fs.readFile("a.txt", "utf-8", function (err, data) {
      console.log("Before resolve");
      resolve(data);
    });
  });
}

// call back function
function onDone(data) {
  console.log(data);
  console.log("After resolve");
}

YeswanthReadFile().then(onDone);

// Another Example
function myOwnAsyncFn() {
  //   return new Promise(function (resolve) {
  let p = new Promise(function (resolve) {
    setTimeout(resolve, 2000);
  });
  return p;
}

const value = myOwnAsyncFn();

value.then(function () {
  console.log("hi there from Batman");
});
