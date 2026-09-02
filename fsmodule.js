const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
  console.log(err, data);
});

// if you run this file you will see that first run is of line 8 then fs.readFile runs
console.log("finished reading a file");

// with above concept learn about readFileSync(),writeFileSync()

fs.writeFile("file2.txt", "this is file2", () => {
  console.log("written to file");
});
