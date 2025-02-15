// Again, it is just syntactic sugar. Still uses callbacks/Promises under the hood
// Makes code much more readable than callbacks/Promises
// Usually used on the caller side, not on the side where you define an async function

function myOwnAsyncFn() {
  //   return new Promise(function (resolve) {
  let p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Hi there"), 2000;
    });
  });
  return p;
}

// const value = myOwnAsyncFn();

// value.then(function () {
//   console.log("hi there from Batman");
// });

// Using Async Await syntax
// it makes code much more readable
async function main() {
  let res = await myOwnAsyncFn();
  console.log(res);
}

main();
