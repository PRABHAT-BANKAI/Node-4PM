const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res
    .status(404)
    .json({ message: "you have access of server", status: "success" });
});

app.listen(process.env.PORT, (error) => {
  if (error) {
    console.log("server is not connected");
  }
  console.log("server is connected");
});
