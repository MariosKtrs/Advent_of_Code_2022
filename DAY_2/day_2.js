//DAY 2

//CHALLENGE 1

//1 point for rock, 2 for paper, 3 for scissors
//0 points if i lost, 3 if it ends in draw, 6 if i won
//X rock, Y paper, Z scissors
//A rock, B paper, C scissors

var fs = require('fs');
var array = fs.readFileSync('input.txt', 'utf8').split('\n');
var my_score=0;

for (var j=0; j<array.length; j++){
    if (array[j][0].match("A")){
        if (array[j][2].match("X"))
            my_score+=4;
     else if (array[j][2].match("Y"))
            my_score+=8;
     else if (array[j][2].match("Z"))
            my_score+=3;
    }
    else if (array[j][0].match("B")){
        if (array[j][2].match("X"))
            my_score+=1;
     else if (array[j][2].match("Y"))
            my_score+=5;
     else if (array[j][2].match("Z"))
            my_score+=9;
    }
    else if (array[j][0].match("C")){
        if (array[j][2].match("X"))
            my_score+=7;
     else if (array[j][2].match("Y"))
            my_score+=2;
     else if (array[j][2].match("Z"))
            my_score+=6;
    }
}

console.log("Score for first challenge is ",my_score);

//CHALLENGE 2

//1 point for rock, 2 for paper,3 for scissors
//0 points if i lost, 3 if it ends in draw, 6 if i won
//X lose, Y draw, Z win
//A rock, B paper, C scissors

var my_score2=0;

for (var j=0; j<array.length; j++){
    if (array[j][0].match("A")){
        if (array[j][2].match("X"))
            my_score2+=3;
     else if (array[j][2].match("Y"))
            my_score2+=4;
     else if (array[j][2].match("Z"))
            my_score2+=8;
    }
    else if (array[j][0].match("B")){
        if (array[j][2].match("X"))
            my_score2+=1;
     else if (array[j][2].match("Y"))
            my_score2+=5;
     else if (array[j][2].match("Z"))
            my_score2+=9;
    }
    else if (array[j][0].match("C")){
        if (array[j][2].match("X"))
            my_score2+=2;
     else if (array[j][2].match("Y"))
            my_score2+=6;
     else if (array[j][2].match("Z"))
            my_score2+=7;
    }
    }
  
console.log("Score for the second challenge is ",my_score2);