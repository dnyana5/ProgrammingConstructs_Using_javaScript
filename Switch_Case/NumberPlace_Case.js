const prompt = require('prompt-sync')();
let  number = prompt('Enter number - ');
switch(number){
    case 1:
        console.log("unit");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Two");
        break;
    case 1000:
        console.log("Three");
        break;
    default:
            console.log("Enter correct number");
        break;
}