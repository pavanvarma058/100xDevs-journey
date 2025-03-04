// Async function example
// Multiple things are context switching with each other
function findSum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}

function findSumTill100() {
  console.log(findSum(100));
}

// setTimeout(findSumTill100, 2000);
// console.log("Hello World");

// Synchronus Function example
// it means it runs sequentially
function syncSleep() {
  let a = 1;
  for (let i = 0; i < 10000000; i++) {
    a++;
  }
}

syncSleep();
findSumTill100();
console.log("Hello JavaScript");
