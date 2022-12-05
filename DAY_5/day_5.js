//DAY 5

var fs = require('fs');
var array = fs.readFileSync('input.txt', 'utf8').split('\n');
var array2=[];
var array3=[];
var k=0;
var v=0;
var stack1,stack2,stack3,stack4,stack5,stack6,stack7,stack8,stack9=[];

stack1=["1","S","Z","P","D","L","B","F","C"];
stack2=["2","N","V","G","P","H","W","B"];
stack3=["3","F","W","B","J","G"];
stack4=["4","G","J","N","F","L","W","C","S"];
stack5=["5","W","J","L","T","P","M","S","H"];
stack6=["6","B","C","W","G","F","S"];
stack7=["7","H","T","P","M","Q","B","W"];
stack8=["8","F","S","W","T"];
stack9=["9","N","C","R"];

var temp_array=[];
var v=1;
var stack_array=[];
stack_array.push(stack1);
stack_array.push(stack2);
stack_array.push(stack3);
stack_array.push(stack4);
stack_array.push(stack5);
stack_array.push(stack6);
stack_array.push(stack7);
stack_array.push(stack8);
stack_array.push(stack9);
var num1,num2,num3;

//CHALLENGE 1

//format the lines with the position commands so that only the numbers remain
for(j=0;j<array.length;j++){
    if(j>=10){
        array2[k]=array[j].replace(/\D/g,'');
        k++;
    }
}

//divide the numbers into three variables : one for positions moved, one for the position where we take the crates from, and one for the position we leave them on 
for(j=0;j<array2.length;j++){
    if(array2[j].length==4){
        num1=parseInt(array2[j].substring(0,2));
        num2=parseInt(array2[j].substring(2,3));
        num3=parseInt(array2[j].substring(3,4));
        
    }
    else{
        num1=parseInt(array2[j].substring(0,1));
        num2=parseInt(array2[j].substring(1,2));
        num3=parseInt(array2[j].substring(2,3));
    }
        //num1 tells us how many crates we need to move, so we need to fill "num1" cells inside the temp array
    for (l=0;l<num1;l++){  
        temp_array[l]=stack_array[num2-1][stack_array[num2-1].length-v];
        v++
          
}
  //COMMENT THE NEXT LINE FOR CHALLENGE 2 RESULT. Otherwise, challenge 1 result will appear.
    temp_array=temp_array.reverse();

  
for (l=0;l<num1;l++){
    stack_array[num3-1].push(temp_array.pop()); 
    stack_array[num2-1].pop();
    }
    v=1;

}

//getting the last element of each of the stacks inside the main stack to get our result
c=0;
var str="";
for(j=0;j<stack_array.length;j++){
str+=stack_array[0+c][stack_array[0+c].length-1];
c++;
}
console.log(str);
