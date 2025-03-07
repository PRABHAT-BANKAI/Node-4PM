const express = require("express");
const UserModel = require("../models/userModel");

const UserRouter = express.Router();

UserRouter.post("/register", async (req, res) => {
  // console.log(req.body);
  // return
  const { name, email, password } = req.body;
  // create user
  try {
    await UserModel.create({ email, password, name });
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

UserRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

UserRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    await UserModel.findByIdAndUpdate(id, { name, email, password });
    res.status(200).json({ message: "User updated successfully" });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

module.exports = UserRouter;
