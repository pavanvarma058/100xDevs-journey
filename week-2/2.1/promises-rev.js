function myOwnSetTimeoutFn(duration) {
  let p = new Promise((resolve) => {
    // after 1 second call will resolve
    setTimeout(resolve, duration);
  });
  return p;
}

myOwnSetTimeoutFn(1000).then(function () {
  console.log("log the first thing");
});
