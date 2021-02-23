function getprime(num) {
 for(vari = 2; vari <= num / 2; vari++){
    if ( (num % vari) == 0 ){
            return (num+" is not a prime number.");
            process.exit();
    }
}
retrun (num+" is a prime number.");
}
function getpalindrome(num) {
    let sum = 0;
    let rem = 0;
    while(num > 0) {
        rem = num %10;
        sum = sum *10 + rem;
        num = Math.floor (num/10);
    }
return sum;
}
const prompt = require('prompt-sync')();
let num =Number(prompt("enter the number - "));
let prime =getprime(num);
let palindrome = getpalindrome(num)
let prime1 = getprime(palindrome);
console.log(prime);
console.log(palindrome+" palindrome of "+num);
console.log(prime1);