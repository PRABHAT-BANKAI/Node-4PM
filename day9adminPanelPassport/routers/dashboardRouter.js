const express = require("express");
const UserModel = require("../models/UserModel");
const dashboardRouter = express.Router();
const passport = require("../middleware/passportLocal");

dashboardRouter.get("/dashboard", (req, res) => {
  // let getData = req.cookies.userData;
  // if (getData) {
  res.render("dashboard");
  // } else {
  //   res.redirect("/");
  // }
});

dashboardRouter.get("/", (req, res) => {
  // let getData = req.cookies.userData;
  // if (!getData) {
  res.render("login");
  // } else {
  //   res.redirect("/dashboard");
  // }
});
dashboardRouter.get("/signup", (req, res) => {
  // let getData = req.cookies.userData;
  if (!getData) {
    res.render("signup");
  } else {
    res.redirect("/dashboard");
  }
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

dashboardRouter.get("/logout", (req, res) => {
  // res.clearCookie("userData");
  res.redirect("/");
});

dashboardRouter.get("/addProducts", async (req, res) => {
  res.render("addProducts");
});

dashboardRouter.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/" }),
  async (req, res) => {
    console.log(req.body);
    res.redirect("/dashboard");
  }
);

module.exports = dashboardRouter;
