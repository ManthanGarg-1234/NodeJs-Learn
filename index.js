// console.log("Hello World")

// const manthan = require("./second")

// console.log(manthan);



// module wrapper function

/*
suppose in a file you have

const name = "MG";

console.log(name);

when you run this through node.js it automatically creates a wrapper function as below:

(function (exports, require, module, __filename, __dirname) {

    const name = "MG";

    console.log(name);

});

That is why if you have

a.js

const name = "MG";

b.js

const name = "Rahul";

then on running the console will have different values as separate wrpper functions are defined so now value overwrite occurs

most important : Har Node.js module ka apna private scope banana.
*/

console.log(exports, require, module, __filename, __dirname)