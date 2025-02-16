// Asynchronus Revision
const fs = require("fs");

// reading a file
fs.readFile("b.txt", "utf-8", function (err, data) {
  console.log(data);
});

// creating my own callback function using async
function OwnAsyncFn(cb) {
  fs.readFile("b.txt", "utf-8", function (err, data) {
    cb(data);
  });
}

function OnDone(data) {
  console.log(data);
}

OwnAsyncFn(OnDone);
