function pavansAysncFunction() {
  let p = new Promise(function (resolve, reject) {
    // do some async logic here
    resolve("hi there");
    // setTimeout(function () {
    //   resolve("hi there");
    // }, 3000);
  });
  return p;
}

async function main() {
  const value = await pavansAysncFunction();
  console.log(value);
}

main();
