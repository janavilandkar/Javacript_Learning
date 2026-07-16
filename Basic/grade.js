let grade=prompt("Enter your Marks");
let score;

        if(grade<=100 && grade>=90)
            score='A';
        
  
        else if(grade<90 && grade>=80)
            score='B';
        
   
        else if(grade<80 && grade>=70)
            score='C';
        

        else if(grade<70 && grade>=50)
            score='D';
        
    
        else if(grade<50 && grade>=35)
            score='E';
           
   else
        score='F';

console.log(score);