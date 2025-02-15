const fs = require("fs");
// file system module

// this is also an Asynchronus function
fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
});

// this will print first
console.log("Hi there");

// takes very long, longer than the file read
// but this print first, because even if the file read finish it just waits untile the threat becomes idle.
let a = 0;
for (let i = 0; i < 1000000000; i++) {
  a++;
}

console.log("Hi there 2");
