const express = require("express");
const condition = require("./middleware/middleware");
const path = require("path");
const port = 8085;
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());

// app.use("/assets",express.static(path.join(__dirname,"/assets")))
app.get("/", (req, res) => {
  return res.render("login");
});

//Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

// app.use(condition);
app.post("/userData", condition,(req, res) =>{
  // console.log(req.body);
  return res.send("User data submitted successfully");
})
app.get("/about", condition, (req, res) => {
  return res.send("About page");
});
app.get("/contact", (req, res) => {
  return res.send("Contact page");
});

app.listen(port, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(`Server running on port ${port}`);
});
