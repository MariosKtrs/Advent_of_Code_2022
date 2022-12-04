//DAY 3

//A simple function that will calculate the sum of priorities. Useful for both challenges.
function calculatePriority(char){
     /*When we find the common character, we use charCodeAt. The code for 'a' is 97, so to give 'a' the value 1, we need to 
       subtract 96. Value of b is 98 and if we subtract 96 it's 2. So this will work for all lowercase letters.*/
    if (char == char.toLowerCase()){
        return  (char.charCodeAt(0) - 96);
    }
    else {      
        /*If the character is uppercase, we convert it to lowercase and use the same code as above. This time though,
          we also add 26, because that's the difference between a lowercase character and its corresponding uppercase.*/           
        char=char.toLowerCase();
        return (char.charCodeAt(0) - 96) +26;
    }      
}

//CHALLENGE 1

var fs = require('fs');
var array = fs.readFileSync('input.txt', 'utf8').split('\n');
var piece1;
var piece2;
var sum=0;

for(j=0;j<array.length;j++){
    //Splitting each array cell exactly in the middle
    piece1 = array[j].substring(0,array[j].length/2);  
    piece2 = array[j].substring((array[j].length/2), array[j].length);
    
    //Converting each piece into sets so that we can iterate through the characters and find the common ones
    set1 = new Set(piece1.split(''))
    set2 = new Set(piece2.split(''))
    for(let char of set1.values()){
        if(set2.has(char)){
           sum+=calculatePriority(char);
        }
    }
}

console.log("Sum of first challenge is ",sum);


// CHALLENGE 2

var counter=0;
sum=0;

array = fs.readFileSync('input.txt', 'utf8').split('\n');

for(j=0;j<array.length;j++){
    if(j%3===0){ //We want to get the sum of priorites every three iterations because we are comparing three lines at a time.
        set1 = new Set(array[j].split(''));
        set2 = new Set(array[j+1].split(''));
        set3 = new Set(array[j+2].split(''));
            for(let char of set1.values()){
                if(set2.has(char)&&set3.has(char)){ 
                    sum+=calculatePriority(char);
                }
            }
    }
}

console.log("Sum of the second challenge is ",sum);
    