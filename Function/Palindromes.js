const prompt = require('prompt-sync')();
const number = prompt("enter the number - ");
let num = number
let reverse = getreverse(num);
    if ( reverse == number){
        console.log("Number is Palindrome");
    }
    else{
        console.log("Number is not Palindrome")
    }
   
function getreverse(){
    let sum = 0;
    let rem = 0;
    while(num > 0){
    rem = num % 10;
    sum = sum *10 + rem;
    num = Math.floor(num /10);
}
return sum;
}
 