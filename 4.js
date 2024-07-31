/* Write a program to take size of array, array and target as input from the user and check whether the target exists in this array or not.

Test Case1:
Input:
7
1 2 3 4 5 6 7
3
Output:
Yes

Test Case2:
Input:
8
Output:
No
*/

const input = require("readline-sync");

let N = input.questionInt("Enter the Input : ");
let c = input.questionInt("Enter the Target Number : ");
let a = [N];
let i = 0;
let b = 0;

while(i < N)
{
    a[i] = input.questionInt("Enter the Value : ");
    i++;
}
i = 0;

while(i < N)
{
    if(a[i] == c)
    {
        b = 1;
        
    }
    i++;

}
if(b==1)
{
    console.log("yes");
}
else{
    console.log("no");
}