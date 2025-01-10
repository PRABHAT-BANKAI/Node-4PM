const express = require("express");
const port = 8080;
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

let record = []
app.get("/", (req, res) => {
return  res.render("form",{record});
});

app.post("/addData", (req, res) => {
  // console.log(req.body);
  const { userName } = req.body;
  record.push(userName);
 return res.redirect("/");
});


app.get("/delete/:id",(req,res)=>{
  console.log(req.params.id)
  let id = req.params.id;

  record = record.filter((element,i)=>i!=id)

 return res.redirect("/")
})

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server is running on port ${port}`);
});
