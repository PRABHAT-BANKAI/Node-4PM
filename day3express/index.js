const express = require("express");
const port = 8081;
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use("/assets", express.static(path.join(__dirname, "./assets")));

app.get("/", (req, res) => {
  return res.render("home");
  // res.write("<h1>hello from server</h1>");
  // res.end();
});

app.get("/about", (req, res) => {
  return res.render("about");
});
app.get("/services", (req, res) => {
  res.render("services");
});

app.listen(port, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(`Server is running on port ${port}`);
});
