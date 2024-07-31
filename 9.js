/* Write a program to take value N from the user and print the following pattern based on the user input.
array = [2, 3, 5, 2, 1]
>>
>>>
>>>>>
>>
>
*/

const input = require("readline-sync");

let n = input.questionInt("Enter the input : ");
let a = [];
let i = 0;

while(i < n)
{
    a[i] = input.questionInt("Enter the Number : ");
    i++;
}

i = 0;
while(i < n)
{
    pattern = '';
    f = a[i];
    j = 0;

        while(j < f)
        {
            pattern += '>'; 
            j++;
        }
              
         console.log(pattern);
         i++;
}
