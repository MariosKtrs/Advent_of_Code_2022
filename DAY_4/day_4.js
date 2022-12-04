//DAY 4

var fs = require('fs');
var array = fs.readFileSync('input.txt', 'utf8').split('\n');

var counter=0;
var counter2=0;


for(j=0;j<array.length;j++){
    //putting each of the 4 numbers contained in a single line, into variables.
    num1=parseInt(array[j].substring(0,array[j].indexOf('-')));
    num2=parseInt(array[j].substring(array[j].indexOf("-")+1,array[j].indexOf(",")));
    num3=parseInt(array[j].substring(array[j].indexOf(",")+1,array[j].lastIndexOf("-")));
    num4=parseInt(array[j].substring(array[j].lastIndexOf("-")+1,array[j].length));

    //CHALLENGE 1
    if((num3>=num1 && num4<=num2)||(num3<=num1 && num4>=num2)){ 
        //checking if the first range is a subset of the second and vice versa.
        counter++;
    }   
    //CHALLENGE 2
    if(num3<=num1 && num4>=num1 || num3>=num1 && num3<=num2){
        //checking if the two ranges overlap at all.
        counter2++;
    }    
}
//CHALLENGE 1
console.log("Answer of first challenge is ",counter);
//CHALLENGE 2
console.log("Answer of second challenge is ",counter2);

