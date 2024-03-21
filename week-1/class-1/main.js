/*
var a = 1;
console.log(a);

let b = 1;
b = 2;
console.log(b);

const c = 4;
// c = 5; this won't work because you can't change the constant variable once you declared it
console.log(c);
*/
/*
let firstName = "Pavan Varma";
let age = 23;
let isMarried = false;
*/
// console.log("This Person name is " + firstName + " and his age is " + age);

// console.log("this person name is");
// console.log(firstName);
/*
/// if else ///
if (isMarried == true) {
  console.log(firstName + " is Married");
} else {
  console.log(firstName + " is not Married");
}
*/
/*
/// LOOPS ///
let answer = 0;

for (let i = 0; i <= 1000; i++) {
  answer += i;
}
console.log(answer);
*/
/*
// ARRAYS ///
const ages = [21, 22, 23, 24, 25, 26];
let numberOfPeople = ages.length;
for (let i = 0; i < numberOfPeople; i++) {
  if (ages[i] % 2 == 0) {
    console.log(ages[i]);
  }
}
*/
/*
/// OBJECTS ///
const allUsers = [
  {
    firstName: "Pavan",
    gender: "male",
  },
  {
    firstName: "Raman",
    gender: "male",
  },
  {
    firstName: "Priya",
    gender: "female",
  },
];

for (let i = 0; i < allUsers.length; i++) {
  if (allUsers[i]["gender"] == "male") {
    console.log(allUsers[i]["firstName"]);
  }
}
*/
/*
/// FUNCTIONS ///
function sum(a, b) {
  const sumValue = a + b;
  return sumValue;
}

const value = sum(5, 8);
const value2 = sum(8, 5);
console.log(value, value2);
*/

/// CallBack Function ///
/*
function sum(num1, num2, fnToCall) {
  const result = num1 + num2;
  fnToCall(result);
}

function displayResult(data) {
  console.log("Result of the sum is: " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is: " + data);
}

const value = sum(2, 10, displayResult);
*/

function calculateArithmetic(a, b, aritmeticFinalFunciton) {
  const ans = aritmeticFinalFunciton(a, b);
  return ans;
}

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

const num = calculateArithmetic(25, 19, sum);
console.log(num);

/// SetTimeOut funciton ///
function greet() {
  console.log("Hello World");
}

setTimeout(greet, 2 * 1000);
setInterval(greet, 1 * 1000);
