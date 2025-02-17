const express = require("express");
const connection = require("./config/db");
const userModel = require("./models/userModel");
const fs = require("fs");
const app = express();
const port = 8082;
const path = require("path");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
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

app.post("/addData", userModel.multerImage, async (req, res) => {
  // console.log(req.body);
  // console.log(req.file);
  // console.log(req.body);

  try {
    if (req.file) {
      req.body.image = userModel.imageUpload + "/" + req.file.filename;
    }
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
  const userData = await userModel.findById(id);
  console.log(id);
  try {
    if (userData) {
      fs.unlinkSync(path.join(__dirname + userData.image)); // delete the file if exists before deleting the document in MongoDB.  //fs.unlinkSync(path.join(__dirname, "/uploads", userData.image));  // delete the file from the specified path.  //fs.rmdirSync(path.join(__dirname, "/uploads"));  // delete the directory if exists before deleting the document in MongoDB.  //fs.rmdirSync(path.join(__dirname, "/uploads", userData.image.split("/")[1]), { recursive: true });  // delete the directory from the specified path and its subdirectories.  //fs.renameSync(path.join(__dirname, "/uploads", userData.image), path.join(__dirname, "/uploads", req.body.image));  // rename the file.  //fs.renameSync(path.join(__dirname, "/uploads", userData.image.split("/")[1]), path.join(__
    }
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

app.post("/updateData/:id", userModel.multerImage, async (req, res) => {
  try {
    let userData = await userModel.findById(req.params.id);
console.log(req.file)
    if (req.file) {
      fs.unlinkSync(path.join(__dirname + userData.image));
      req.body.image = userModel.imageUpload + "/" + req.file.filename;
    }

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
