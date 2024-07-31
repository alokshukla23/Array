/* Write a program to reverse the array and print the reversed array.

Test Case1:
Input:
23 45 32 25 46 33 71 90
Output:
90
71
33
46
25
32
45
23
*/

const input = require("readline-sync");

let N = input.questionInt("enter the number : ");
let a = [N];
let i = 0;

while(i<N)
{
  a[i] = input.questionInt("enter the value : ");
  i++;
}

 i = N - 1;

 while(i >= 0)
 {
    console.log(a[i]);
    i--;
 } 
 

