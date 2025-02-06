function findSum(a, b) {
  // do things with the input and return output

  const sumValue = a + b;
  return sumValue;
}

const value = findSum(2, 3);
console.log(value);

// Call back functions
// function sum(num1, num2, fnToCall) {
//   let result = num1 + num2;
//   fnToCall(result);
// }

// function displayResult(data) {
//   console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//   console.log("Sum's result is : " + data);
// }

// // You are only allowed to call one function after this
// // How will you displayResult of a sum

// const ans = sum(2, 3, displayResult);

function calculateArithmetic(a, b, arithmeticFunction) {
  const ans = arithmeticFunction(a, b);
  return ans;
}

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

const res = calculateArithmetic(15, 5, sum);
console.log(res);
