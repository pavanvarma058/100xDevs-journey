// Asynchronous functions

// function findSum(n) {
//   let ans = 0;
//   for (let i = 0; i < n; i++) {
//     ans += i;
//   }
//   return ans;
// }

// function findSumTill100() {
//   console.log(findSum(100));
// }

// setTimeout(findSumTill100, 1000);
// console.log("hello world!");

// filesystem module
const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
});

console.log("hi there");

let a = 0;
for (let i = 0; i < 10000000000; i++) {
  a++;
}

console.log("hi there 2");
