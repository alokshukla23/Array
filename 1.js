/* Write a program to print all the numbers from the given array using a loop.
L = {23, 45, 32, 25, 46,33, 71, 90}

Output:
23
45
32
25
46
33
71
90
*/

const input = require("readline-sync");

let N = input.questionInt("Enter the Length : ");
let arr = [];
let i = 0;

while(i < N)
{
    arr[i] = input.questionInt("Enter the Element : ");
    i++;
    
} 
console.log(arr);