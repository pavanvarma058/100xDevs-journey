// fs is a library that gives u high level constructs
// to do filesystem stuff (read from a file, write to a file...)

// what is express
// express is a library that gives u high level constructs
// to create http servers

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! from express");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
