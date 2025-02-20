const express = require("express");
const app = express();
const port = 3000;

// same as fs.readfile in nodejs
// fs.readFile("file.txt", (err, data)=>{});
// fs -> file system - read files on system, write to files on system
// express -> web server, web application framework, writes https requests, reads https requests
// express -> uses http module to create a server
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
