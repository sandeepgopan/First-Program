var readlineSync = require('readline-sync');
let n = readlineSync.question("enter a number ");
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string = string+ "*";
  }
string = string+  "\n";
}
console.log(string);

var readlineSync = require('readline-sync');
let l = readlineSync.question("enter a number ");
let stringl = "";
for (let i = 0; i <= l; i++) {
  for (let j = 0; j < l; j++) {
    stringl = stringl + "*";
  }
stringl = stringl +  "\n";
}
console.log(stringl);

var readlineSync = require('readline-sync');
let l1 = readlineSync.question("enter a number ");
let stringl1 = "";
for (let i = 0; i <= l1; i++) {
  for (let j = 0; j < (l1 - i); j++) {
    stringl1 = stringl1 + "*";
  }
stringl1 = stringl1 +  "\n";
}
console.log(stringl1);