/*Write a program to print the sum of all the odd numbers and even numbers in the given array.
Note: In the output, you should print odd numbers sum and even numbers sum in this order only.

Test Case1:
Input:
23 45 32 25 46 33 71 90
Output:
197
168
*/

const input = require("readline-sync");

let N = input.questionInt("Enter the Input : ");
let a = [N];
let i = 0;
let es = 0;
let os = 0;

while(i < N)
{
    a[i] = input.questionInt("Enter the Value : ");
    i++;
}
i = 0;

while(i < N)
{
    if(a[i] % 2 == 0)
    {
       es = es + a[i];
    }
    
    else
    {
        os = os + a[i];
    }i++;
}
{
    console.log(es, os);
}