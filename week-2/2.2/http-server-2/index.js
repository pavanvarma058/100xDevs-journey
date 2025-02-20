const express = require("express");
const app = express();
const port = 3000;

app.get("/route-handler", (req, res) => {
  res.json({
    name: "Pavan Varma",
    age: 24,
  });
});

app.get("/", (req, res) => {
  res.send("Hi if you want to know my name and age go to /route-handler");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
