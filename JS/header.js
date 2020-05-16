let tete=document.getElementById("news");
let lettre=document.getElementById("letters");
let block1=document.getElementsByClassName("block1");
let block2=document.getElementsByClassName("block2");
let blo=document.getElementById("blo");
let frise=document.getElementById("frise");
let roue=document.getElementById("roue");




tete.addEventListener("click",function(){
  tete.classList.toggle("block1Apparaitre");
   frise.classList.toggle("pointBis");
  lettre.classList.toggle("block22"); 
  roue.classList.toggle("roueBis");
 

})