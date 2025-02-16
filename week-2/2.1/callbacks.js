// callback revision

function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function quad(n) {
  return n * n * n * n;
}

// here callback will be used
function SumOfSomething(a, b, fn) {
  let val1 = fn(a);
  let val2 = fn(b);
  return val1 + val2;
}

let ans = SumOfSomething(1, 2, quad); // we defined callback here
console.log(ans);
