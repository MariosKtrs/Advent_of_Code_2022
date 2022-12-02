//PART 1

var fs = require('fs');
var array1 = fs.readFileSync('input.txt', 'utf8').split('\n');
var array = array1.map(Number);
var sum_array = [];
var k=0;
var total=0;


for (var j=0; j<array.length; j++){
    if(array[j]>0){
        total+=array[j];    
    }
    else{    
    sum_array[k]=total;
    k+=1; 
    total=0;
    }
}

const max1 = Math.max(...sum_array);
console.log("The max is ",max1)

//PART 2

const index = sum_array.indexOf(max1)
sum_array.splice(index, 1);

const max2 = Math.max(...sum_array);
const index2 = sum_array.indexOf(max2)
sum_array.splice(index2, 1);

const max3 = Math.max(...sum_array);
const index3 = sum_array.indexOf(max3)
sum_array.splice(index3, 1);

console.log("The sum of the 3 maxes is ",max1+max2+max3);


