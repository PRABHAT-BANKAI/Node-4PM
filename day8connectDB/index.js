const express = require("express");
const connection = require("./config/db");
const userModel = require("./models/userModel");
const app = express();
const port = 8082;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.get("/", async (req, res) => {
  try {
    let userData = await userModel.find({});
    console.log(userData);
    res.render("form", { userData }); //;{password}//{"password":"123545"}
  } catch (err) {
    console.log(err);
    res.render("/");
  }
});

app.post("/addData", async (req, res) => {
  // console.log(req.body);
  try {
    await userModel.create(req.body);
    console.log("user created successfully");
    res.redirect("/");
  } catch (e) {
    console.log(e);
    res.redirect("/");
  }
});

app.get("/deleteData/:id", async (req, res) => {
  // : params
  const id = req.params.id;
  console.log(id);
  try {
    await userModel.findByIdAndDelete(id);
    console.log("user deleted successfully");
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.redirect("back");
  }
});

app.get("/editData/:id", async (req, res) => {
  try {
    let userData = await userModel.findById(req.params.id);
    res.render("editForm", { userData });
  } catch (err) {
    console.log(err);
    res.redirect("back");
  }
});

app.post("/updateData/:id", async (req, res) => {
  try {
    await userModel.findByIdAndUpdate(req.params.id, req.body);
    console.log("user updated successfully");
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.redirect("back");
  }
});

app.listen(port, (err) => {
  if (err) {
    console.log("Error starting server", err);
    return;
  }
  connection();
  console.log(`Server started on port ${port}`);
});
