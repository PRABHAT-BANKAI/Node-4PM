const express = require("express");
const connection = require("./config/db");
const app = express();
const port = 8082;

app.get("/", (req, res) => {
  res.send("database");
});

app.listen(port, (err) => {
  if (err) {
    console.log("Error starting server", err);
    return;
  }
  connection()
  console.log(`Server started on port ${port}`);
});
