var fs = require('fs');
var content = fs.readFileSync('input.txt','utf8').split(/\r?\n/);

var counter1=counter2=counter3=counter4=0;
var counter1_1=counter1_2=counter1_3=counter1_4=0;
var visible=0;
var res=0;
var outer_counter=0;

var scenic_score=0;
var right=left=down=up=0;

for(i=0;i<content.length-1;i++){
    
    for(j=0;j<content.length-1;j++){
       
        if(i == 0 || j == 0 || i == content.length-2 || i == content.length-2){//get all surrounding elements
           outer_counter++;
        }

        else{
            
//PART 1 ------------------------------------------------------------------------------------------------------------------

            //scanning all of the trees in every direction related to a given tree
            for (l=j;l<content.length-1;l++){
                if(content[i][j]>content[i][l]) //if the selected tree is bigger than the next,it is visible for now
                    counter1++;
                else
                    counter1_1++

            }
            if(counter1==(counter1+counter1_1-1)) //this means that no trees were shorter than the selected tree in the x direction, so it is visible.
                visible++
       
            for(l=j;l>=0;l--){
                if(content[i][j]>content[i][l])
                    counter2++;     
                else
                    counter1_2++       
                             
            }
            if(counter2==(counter2+counter1_2-1))
                visible++
         
            for(l=i;l<content.length-1;l++){
                if(content[i][j]>content[l][j])
                    counter3++;     
                else
                    counter1_3++  
            }
            if(counter3==(counter3+counter1_3-1))
                visible++
            
            for(l=i;l>=0;l--){
                if(content[i][j]>content[l][j])    
                    counter4++;    
                else
                    counter1_4++           
            }
       
            if(counter4==(counter4+counter1_4-1))
                visible++
                 
            if(visible>0)
                res++ //there is at least one direction where all trees are shorter than the selected one, so we add to the visible trees

            counter1=counter2=counter3=counter4=0;
            counter1_1=counter1_2=counter1_3=counter1_4=0;
            visible=0;

//PART 2 -------------------------------------------------------------------------------------------------------------------

                for (l=j;l<content.length-1;l++){
                    if (l!=j){ //we dont want to deal with the first repetition because the tree gets compared with itself
                        if(content[i][j]>content[i][l]) //the next tree is smaller than the selected, so we add to this specific scenic distance direction
                            right++;
                        else if(content[i][j]<=content[i][l]){  //if it is smaller or equal to the next, the view gets blocked. we add 1 tree to the scenic distance and escape the loop
                            right++;
                            break;
                        }
                   
                    } 
                }
    
                for(l=j;l>=0;l--){
                    if (l!=j){
                        if(content[i][j]>content[i][l])
                            left++;
                        else if(content[i][j]<=content[i][l]){
                            left++;
                            break;
                        }               
                    } 
                }
    
                for(l=i;l<content.length-1;l++){
                    if (l!=i){
                        if(content[i][j]>content[l][j])
                            down++; 
                        else if(content[i][j]<=content[l][j]){
                            down++;
                            break;
                        }           
                    } 
                }
    
                for(l=i;l>=0;l--){
                    if (l!=i){
                        if(content[i][j]>content[l][j])
                            up++;                 
                        else if(content[i][j]<=content[l][j]){
                            up++;
                            break;
                        }           
                    } 
                }
    
                temp=up*down*left*right; //scenic_distance  

                if(temp>scenic_score) //getting the max scenic distance        
                    scenic_score=temp;

                up=down=left=right=0;

        }        
    }    
}
console.log("Number of visible trees is ",res+outer_counter)
console.log("Scenic score is ",scenic_score) 