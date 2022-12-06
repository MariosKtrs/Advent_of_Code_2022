var fs = require('fs');

function marker_detector(len){
    
    buffer = fs.readFileSync('input.txt', 'utf8')
    first_time=true; //useful for the first string we process. In the first string we have 4 new chars and after that we get 1 new char at a time.
    marker=0;
    temp_buffer="";
  
    for(j=0;j<len;j++){ 
        temp_buffer+=buffer[j]; 
        if(j==len-1){ 
            if(((/([a-z]).*?\1/).test(temp_buffer))===true){ //if a character is repeated
                j=-1; //resetting the loop
                buffer=buffer.substring(1); //removing the first character of the input string
                temp_buffer="";
                if(first_time===true){      
                marker+=len;
                first_time=false;
                }
                else
                    marker++;
            }
            else
                marker++;            
        }
    }
 return marker;
}

console.log("CHALLENGE 1",marker_detector(4));
console.log("CHALLENGE 2",marker_detector(14));


