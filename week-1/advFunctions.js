// set timeout function
function greet() {
  console.log("hello world");
}

// this function is used to call a function after some time that we have define
setTimeout(greet, 3 * 1000);

// set interval function

// this function is used to call the function continously after defining some interval time
setInterval(greet, 2 * 1000);
