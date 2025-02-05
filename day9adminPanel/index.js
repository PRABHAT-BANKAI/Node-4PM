const express = require("express");
const app = express();
const path = require("path");
const dashboardRouter = require("./routers/dashboardRouter");
const connection = require("./config/db");
const cookieParser = require("cookie-parser");
require("dotenv").config();

app.use("/assets", express.static(path.join(__dirname, "/assets")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(cookieParser());

app.use("/", dashboardRouter);
app.listen(process.env.PORT, (error) => {
  if (error) {
    console.log("server is not running");
    return;
  }
  connection();
  console.log(`server is running ${process.env.PORT}`);
});
