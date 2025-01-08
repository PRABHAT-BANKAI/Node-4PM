const http = require("http"); // hyper text transfer protocol
const port = 8080;
const fs = require("fs");
http
  .createServer((req, res) => {
    fs.readFile("node.txt", "utf8", function (err, data) {
      // Display the file content

      res.write(`<h1>hello from server ${data}</h1>`);
      res.end();
    });

    
  })
  .listen(port, (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(`server is running  on this port ${port}`);
  });