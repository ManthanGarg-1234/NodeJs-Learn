const { Console } = require("console");
const http = require("http");

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
  } else {
    // res.harry() this line is added just to crash the server if user goes on a undefined url
    res.statusCode = 404;
    res.end("<h1>default page</h1>");
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
