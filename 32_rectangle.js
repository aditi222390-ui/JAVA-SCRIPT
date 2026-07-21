const prompt = require('prompt-sync')();

let height = Number(prompt("Enter the height of rectangle: "));
let base = Number(prompt("Enter the base of rectangle:"));
let area = height*base;


console.log(area);