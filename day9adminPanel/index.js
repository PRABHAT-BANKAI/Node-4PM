const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

app.use("/assets", express.static(path.join(__dirname, "/assets")));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("dashboard");
});

app.listen(process.env.PORT, (error) => {
  if (error) {
    console.log("server is not running");
    return;
  }
  console.log(`server is running ${process.env.PORT}`);
});
