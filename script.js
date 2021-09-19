const calcy=()=>{
 let wd=document.getElementById('wd').value;
 // we want wd id ka value so .value
 let maths=document.getElementById('maths').value;
 let comp=document.getElementById('comp').value;
 let phy=document.getElementById('phy').value;
 let totalGrade=parseFloat(wd)+parseFloat(maths)+parseFloat(comp)+parseFloat(phy);
 // to add nos stored in string use parseFloat
 // total is done now % 
 let perc=(totalGrade/400)*100;
 // % is done now grade
 // since variable grade wulol be used again n again on diff grades 
 let grades='';
 if (perc<=100 && perc>=80){
  grades='A';

 }
 else if(perc<=79 && perc>=60){
    grades='B';
  
   }
   else if  (perc<=59 && perc>=40){
    grades='C';
  
   }
   else{
       grades='F';
   }
   if(perc>=39){
    document.getElementById('showData').innerHTML=`Out of 400 ,your total
    score is ${totalGrade} and your percentage is ${perc}%. <br>
    Your grade is ${grades} and you are Pass.` 
   }
   else{
    document.getElementById('showData').innerHTML=`Out of 400 ,your total
    score is ${totalGrade} and your percentage is ${perc}%. <br>
    Your grade is ${grades} and you are Fail.`
   }

   
}