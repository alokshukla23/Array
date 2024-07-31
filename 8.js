/* Write a program to take two sorted arrays of size M, N from the user as input and merge them into a single sorted array of size M+N (Do not use sorting)

Test Case1:
Input:
1 2 5 6
3 4 7 9
Output:
*/

const input = require("readline-sync");

let m = input.questionInt("Enter the first Input : ");
let n = input.questionInt("Enter the second Input : ");
let a = [];
let b = [];
let c = [];

for(let i=0;i<m;i++){
    a[i]=input.questionInt("enter the element of first number : ")
}
let j = 0;
while(j<n)
{
    b[j] = input.questionInt("Enter the element of second number : ");
    j++;
}

 i = 0;
  j = 0;
 let k = 0;
    while(k<m+n) {
        while(i<m){
            while(j<n){
                if(a[i]<b[j]){
                    console.log(a[i]);
                    i++;
                    k++;
                }
                else{
                    console.log(b[j]);
                    j++;
                    k++;
                }
            }
        }
    }       
     