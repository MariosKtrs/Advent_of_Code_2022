var fs = require('fs');
var array = fs.readFileSync('input.txt', 'utf8').split('\n');
var cycle=0;
var str=""
var number=""
var x=1;
var signal1=signal2=signal3=signal4=signal5=signal6=0;
var res=0;
var counter=0;
var crt=[[],[],[],[],[],[]];
var sprite=[];
var line_changer=40
var line=0;
var pos1=0;
var pos2=1;
var pos3=2;
current_pixel=0;
signal_array=[];


//CHALLENGE 1 --------------------------------------------------------------------------------------

for(i=0;i<array.length-1;i++){
    for(j=0;j<4;j++){
        str+=array[i][j]; //getting the command
    }
    for(j=5;j<array[i].length;j++){
        number+=array[i][j]; //getting the offset
    }
    
    if(str=="noop"){
        cycle++;
        calculateSignal(cycle,x); //calling the function in each tick in case the cycle reaches the required value in mid-loop
    }
    else if(str=="addx"){
        while(counter<2){ //we need two ticks for this command, so in the first tick the cycle just increases, and in the second the cycle increases again and addx gets executed
            if(counter==0){ 
                cycle++;
                calculateSignal(cycle,x);     
                counter++;
            } else if (counter == 1){
                cycle++;
                calculateSignal(cycle,x);
                x+=parseInt(number); //command gets executed and x increases
                counter++;
            }
        
            }
             
        }
        counter=0;
        str=""; //emptying everything at the end of each loop
        number="";
    }

res = calculateSignal(cycle,x)
console.log("Signal strength is ", res)


//CHALLENGE 2 -----------------------------------------------------------------------------------

x=0;
cycle=0;

//Initial positions of the sprite array
for(i=0;i<40;i++){
    if(i<3)
    sprite.push("#")
    else
    sprite.push(".")
    
}

//Some of the code in the previous challenge gets reused here, but this way it is less confusing

for(i=0;i<array.length;i++){
    for(j=0;j<4;j++){
        str+=array[i][j];
    }
    for(j=5;j<array[i].length;j++){
        number+=array[i][j];
    }
    if(str=="noop"){
        cycle++;   
        
        if(cycle<=line_changer){ //if the current cycle is less 40,80,120 etc
            if(current_pixel==pos1 || current_pixel==pos2 || current_pixel==pos3 ) //checking to see if the current pixel that the crt drew, is in the same position as the sprite
            crt[line].push("#")
            else
            crt[line].push(".")
            current_pixel++;
        }
        else{ //we move on to the next array in our 2d array aka the next line
            line++;
            current_pixel=1; //we are again at the first pixel since we are at the beginning of the next row
            if(current_pixel==pos1 || current_pixel==pos2 || current_pixel==pos3 )
            crt[line].push("#")
            else
            crt[line].push(".")
            line_changer+=40 //requirement to change line next time
        }
        
    }
    else if(str=="addx"){
        while(counter<2){
            if(counter==0){
                cycle++;

                if(cycle<=line_changer){
                    if(current_pixel==pos1 || current_pixel==pos2 || current_pixel==pos3 )
                    crt[line].push("#")
                    else
                    crt[line].push(".")
                    current_pixel++;
                }
                else{
                    line++;
                    current_pixel=1;
                    if(current_pixel==pos1 || current_pixel==pos2 || current_pixel==pos3 )
                        crt[line].push("#")
                    else
                        crt[line].push(".")  

                        line_changer+=40
                }

                counter++;
               
            } else if (counter == 1){
                cycle++;
                if(cycle<=line_changer){
                    if(current_pixel==pos1 || current_pixel==pos2 || current_pixel==pos3 )
                        crt[line].push("#")
                    else
                        crt[line].push(".")
                        current_pixel++;     
                }
                else{
                    line++;
                    current_pixel=1
                    if(current_pixel==pos1 || current_pixel==pos2 || current_pixel==pos3 )
                        crt[line].push("#")
                    else
                        crt[line].push(".")
                    
                        line_changer+=40
                }

                x+=parseInt(number);
              
                for(k=0;k<sprite.length;k++){
                    if(k!=x && k!=x+1 && k!=x+2)
                        sprite[k]="."
                    else{
                        sprite[k]="#"
                        pos1=x;
                        pos2=x+1;
                        pos3=x+2;
                    }
                }
                
                counter++;
                
            }
        
        }
           
    }
    counter=0;
    str="";
    number="";
    
}

string1 = crt[0].join()
string2 = crt[1].join()
string3 = crt[2].join()
string4 = crt[3].join()
string5 = crt[4].join()
string6 = crt[5].join()

console.log("\nCRT DISPLAY:\n")
console.log(string1)
console.log(string2)
console.log(string3)
console.log(string4)
console.log(string5)
console.log(string6,"\n")




function calculateSignal(cycle,x){
    if(cycle==20){
        signal1=cycle*x;
    } else if (cycle==60) {
        signal2=cycle*x;
    } else if (cycle==100) {
        signal3=cycle*x;
    } else if (cycle==140) {
        signal4=cycle*x;
    } else if (cycle==180) {
        signal5=cycle*x;
    } else if (cycle==220) {
        signal6=cycle*x;
    }
    return signal1+signal2+signal3+signal4+signal5+signal6
}