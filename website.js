const { Console } = require("console");
const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // console.log(req);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  console.log(req.url);
  if (req.url == "/") {
    res.statusCode = 200;
    res.end("<h1>i am learning https module in nodejs</h1>");
  } else if (req.url == "/about") {
    res.statusCode = 200;

    res.end("<h1>this is about</h1>");
  } else if (req.url == "/hello") {
    res.statusCode = 200;
    const data = fs.readFileSync("index.html");
    res.end(data.toString());
  } else {
    // res.harry() this line is added just to crash the server if user goes on a undefined
    res.statusCode = 404;
    res.end("<h1>default page</h1>");
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
