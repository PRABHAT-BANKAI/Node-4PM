const express = require("express");
const UserModel = require("../models/UserModel");
const dashboardRouter = express.Router();
const passport = require("../middleware/passportLocal");
const nodemailer = require("nodemailer");
const ProductModel = require("../models/ProductModels");
const SubProductModel = require("../models/SubProduct");

dashboardRouter.get("/dashboard", passport.auth, (req, res) => {
  res.render("dashboard");
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
  // console.log(req.body);

  try {
    await UserModel.create(req.body);
    // console.log("user created successfully");

    res.redirect("/");
  } catch (err) {
    console.log(err);

    res.redirect("back");
  }
});

dashboardRouter.get("/userTable", passport.auth, async (req, res) => {
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
  req.flash("logout", "logout successfull");
  req.session.destroy();
  res.redirect("/");
});

dashboardRouter.get("/addProducts", passport.auth, async (req, res) => {
  res.render("addProducts");
});

dashboardRouter.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/" }),
  async (req, res) => {
    console.log(req.body);
    req.flash("success", "login successfull");
    res.redirect("/dashboard");
  }
);

dashboardRouter.post("/otpCheck", async (req, res) => {
  let getData = await UserModel.findOne({ email: req.body.otpEmail });
  if (getData) {
    let otp = Math.floor(Math.random() * 10000);
    res.cookie("storeOtp", otp);
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "prabhssgg@gmail.com",
        pass: "jkyn vite uqau jlmv",
      },
    });

    var mailOptions = {
      from: "prabhssgg@gmail.com",
      to: req.body.otpEmail,
      subject: "OTP",
      text: `OTP ${otp}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
      res.render("otpPage");
    });
  } else {
    console.log("user not found in database");
    res.redirect("/");
  }
});

dashboardRouter.post("/addProduct", async (req, res) => {
  try {
    await ProductModel.create(req.body);
    req.flash("success", "Product added successfully");
    console.log("product created successfully");
    res.redirect("/dashboard");
  } catch (err) {
    console.log(err);
    res.redirect("back");
  }
});

dashboardRouter.post("/addSubProduct", async (req, res) => {});

dashboardRouter.get("/addSubProducts", async (req, res) => {
  try {
    const getProducts = await ProductModel.find({});
 
    res.render("addSubProducts", { getProducts });
  } catch (err) {
    console.log(err);
    res.redirect("back");
  }
});

dashboardRouter.post("/createSubProduct", async (req, res) => {
  // console.log(req.body);

  try{
    await SubProductModel.create(req.body)
   
    console.log("sub product created")
    res.redirect("/dashboard");
  }catch (err) {
    console.log(err);
    res.redirect("back");
  }
})

module.exports = dashboardRouter;
