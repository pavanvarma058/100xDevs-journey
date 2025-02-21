const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// middlewares
app.use(bodyParser.json());
// app.get("/route-handler", (req, res) => {
//   // header, body , query parameters
//   // do machine learning model
//   res.json({
//     name: "Pavan Varma",
//     age: 24,
//   });
// });

// app.get("/", (req, res) => {
//   res.send("Hi if you want to know my name and age go to /route-handler");
// });

app.post("/", (req, res) => {
  // to get the body req from the user in post request we have to use body-parser
  // bcoz by default express does not parse the body of the request
  // we have to use body-parser to parse the body of the request
  console.log(req.body);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
