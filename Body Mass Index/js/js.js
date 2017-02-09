function compute()
{
  
  var weight = document.getElementById("what_weight").value;
  var height = document.getElementById("what_height").value;
  height = height/100;
  if(weight > 40 && weight < 360 && height > 1.0 && height < 3.0) 
  {
   var bmi = Math.round(weight/(height*height)*10)/10;
   document.getElementById("bmi").innerHTML="The value of BMI "+bmi+"</br>"+what_bmi(bmi); 
  }
  else document.getElementById("bmi").innerHTML="";
  
}


function what_bmi(bmi)
{
  var tekst;
  if(bmi<16) 
  {
    tekst= "starvation";
  }
  else  if(bmi>=16&&bmi<17) 
  {
    tekst= "Emaciation";
  }
  else  if(bmi>=17&&bmi<18.5) 
  {
    tekst= "Underweight";
  }
  else  if(bmi>=18.5&&bmi<25) 
  {
    tekst= "Good weight";
  }
  else  if(bmi>=25&&bmi<30) 
  {
    tekst= "Underweight";
  }
  else  if(bmi>=30&&bmi<35) 
  {
    tekst= "I grade of obesity";
  }
  else  if(bmi>=35&&bmi<40) 
  {
    tekst= "II grade of obesity";
  }
    else  if(bmi>=40 && bmi<50) 
  {
    tekst= "III grade of obesity";
  }
  else 
  {
    tekst="Something went wrong";
  }
  return tekst
}
function check()
{
  var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
 
  if(w<400)
    {
       document.getElementById("what_weight").style.fontSize="15vw";
       document.getElementById("what_height").style.fontSize="3vw";
      document.getElementById("compute").style.fontSize="6vw";
    document.getElementById("compute").style.padding="2%";
    document.getElementById("compute").style.width="115%";
    }
    
}