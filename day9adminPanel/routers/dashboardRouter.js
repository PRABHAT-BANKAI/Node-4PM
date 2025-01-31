const express = require("express");
const UserModel = require("../models/UserModel");
const dashboardRouter = express.Router();

dashboardRouter.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

dashboardRouter.get("/", (req, res) => {
  res.render("login");
});
dashboardRouter.get("/signup", (req, res) => {
  res.render("signup");
});

dashboardRouter.post("/createData", async (req, res) => {
  console.log(req.body);
  try {
    await UserModel.create(req.body);
    console.log("user created successfully");
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.redirect("back");
  }
});

module.exports = dashboardRouter;
