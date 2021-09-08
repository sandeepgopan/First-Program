console.log("Hey...");
var readlinesync = require('readline-sync');
var userName = readlinesync.question("Please enter your name ");
console.log("Welcome " + userName.toUpperCase() + "!");