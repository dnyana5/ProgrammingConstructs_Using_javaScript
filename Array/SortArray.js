var array = new Array();
for (let i = 0; i < 10; i++){
        let random = (Math.floor(Math.random() * 900)+100);
            array[i] = random;
  }
console.log("Generated random numbers into array :"+array);
array.sort();
console.log("Sorted Array :"+array);
console.log(" Second largest number : " +array[array.length-2]);
console.log(" Second smallest number : " +array[1]);