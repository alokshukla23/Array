// Write a program to create an array of natural numbers till 20 and print it.

const input = require("readline-sync");

let n = input.questionInt("Enter the number : ");
let a = [];
let i = 0;

while(i < n)
{
    a[i] = input.questionInt("enter the numbers:")
    i++
}
console.log(a);