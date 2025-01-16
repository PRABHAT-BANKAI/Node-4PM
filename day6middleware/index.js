const express = require("express");
const condition = require("./middleware/middleware");
const path = require("path");
const port = 8085;
const app = express();

// app.use("/assets",express.static(path.join(__dirname,"/assets")))
app.get("/", (req, res) => {
  return res.send("homepage");
});

  //Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.


  app.use(condition);
app.get("/about",  (req, res) => {
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
