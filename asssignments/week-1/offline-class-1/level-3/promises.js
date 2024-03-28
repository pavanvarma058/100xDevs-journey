/*
const fs = require("fs");

// my own asynchornous functon
function pavansReadFile() {
  return new Promise(function (resolve) {
    console.log("inside promise");
    fs.readFile("a.txt", "utf-8", function (err, data) {
      console.log("before resolve");
      resolve(data);
      console.log("after resolve");
    });
  });
}

// callback function to call
function onDone(data) {
  console.log(data);
}

const a = pavansReadFile();
a.then(onDone);
*/

// => Pending, resolved

var d = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("foo");
  }, 1000);
});

function callback() {
  console.log(d);
}

console.log(d);
d.then(callback);
