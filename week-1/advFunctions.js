// set timeout function
function greet() {
  console.log("hello world");
}

// this function is used to call a function after some time that we have define
setTimeout(greet, 3 * 1000);

// set interval function

function repeat() {
  console.log("I'm repeating the same thing again and again until you stop..!");
}
// this function is used to call the function continously after defining some interval time
setInterval(repeat, 2 * 1000);
