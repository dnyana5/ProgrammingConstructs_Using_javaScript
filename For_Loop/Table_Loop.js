const prompt = require('prompt-sync')();
let  number = prompt('Enter number - ');
power =1;
for ( i = 0; i <= number; i++){
    if( i == 0 ){
        power = 1;
}
else {
        power = power * 2;
}
console.log("2's power"+i+" ="+power);
}