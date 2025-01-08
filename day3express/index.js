const express = require("express");
const port = 8081;
const app = express();

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("home");
  // res.write("<h1>hello from server</h1>");
  // res.end();
});

app.listen(port, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(`Server is running on port ${port}`);
});
