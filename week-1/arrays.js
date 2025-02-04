let person1 = "Pavan";
let person2 = "Varma";
let person3 = "Surya";

const personArr = ["Pavan", "Varma", "Surya"]; // Array syntax example

console.log(personArr);

console.log(personArr[0]);
console.log(personArr[1]);
console.log(personArr[2]);

// Write a program prints all the even numbers in an array

const ages = [21, 22, 23, 24, 25, 26];

for (let i = 0; i < ages.length; i++) {
  if (ages[i] % 2 == 0) {
    console.log(ages[i]);
  }
}

// Write a program to print the biggest number in an array

const numArr = [21, 28, 32, 44, 5, 16];

let max = numArr[0];

for (let i = 1; i < numArr.length; i++) {
  if (numArr[i] > max) {
    max = numArr[i];
  }
}

console.log("The Max number in the given array is " + max);
