/* Write a program to take N numbers from a user as input and then print the duplicates in those N numbers. Also, take N as an input from the user.

Test Case 1:
Input:
5
2 4 2 6 3
Output:
2

Test Case 2:
Input:
6
2 4 6 3 3 2
Output:
3 2
*/

const input = require("readline-sync");

let N = input.questionInt("Enter the Input : ");
let a = [];
let i = 0;

while(i < N)
{
    a[i] = input.questionInt("Enter the Value : ");
    i++;
}

i = 0;
while(i < N)
{
    let c = 0;
    let j = i + 1;
    while(j < N)
    {
        if(a[i] == a[j])
        {
            c++;
            let k = j;
            while(k < N - 1)
            {
                a[k] = a[k + 1];
                k++;
            }
            N--;
        }
        else
        {
            j++;
        }
    }
    if(c > 0)
    {
        console.log(a[i]);
    }
    i++;
}

