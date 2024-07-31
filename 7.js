/* Write a program to take N numbers from the user and print the frequency of every number.

Test Case 1:
Input:
6
2 4 2 6 3 6
Output:
2 - 2
4 - 1
6 - 2
3 - 1
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
    let c = 1;
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
    console.log(a[i] + " - " + c);
    i++;
}
