console.log("Hey...");
var readlinesync = require('readline-sync');
var userName = readlinesync.question("Please enter your name ");
console.log("Welcome " + userName.toUpperCase() + "!");
var userAge = readlinesync.question("Am I older than 25? Yes/No? ");
var score = 0;
if(userAge === "Yes"){
  console.log("You are right");
   score = score+1;
}
else{
  console.log("You are Wrong");
  score = score-1;
}
console.log("Your score is " + score);