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

dashboardRouter.get("/userTable", async (req, res) => {
  try {
    const getUsers = await UserModel.find({});
    console.log(getUsers);
    res.render("userTable", { getUsers });
  } catch (error) {
    console.log(error);
  }
});

dashboardRouter.get("/addProducts", async (req, res) => {
  res.render("addProducts");
});

dashboardRouter.post("/login", async (req, res) => {
  console.log(req.body);

  try {
    const getLoginData = await UserModel.findOne({
      userName: req.body.userName,
    });
    console.log(getLoginData);
    if (getLoginData.password === req.body.password) {
      res.redirect("/dashboard");
    }else{
      res.redirect("/");
    }
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});

module.exports = dashboardRouter;
