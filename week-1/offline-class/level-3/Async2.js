const fs = require("fs");

// creating my own async function

function PavanReadFile(cb) {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    cb(data);
  });
}

// creating call back function
function onDone(data) {
  console.log(data);
}

PavanReadFile(onDone);
