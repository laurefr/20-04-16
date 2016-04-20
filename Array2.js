var event1 = document.getElementById("button1");
event1 = document.getElementById("click", myFunction, false);


var fruit1 = ["kiwi" ,"lemon","tomato" ];
var fruit2 = ["melon" ,"fraise","pomme"];
var fruit3 = ["cerise" ,"poire","raisin"];

document.getElementById("output").innerHTML=fruit1 + "<br>" + fruit2 + "<br>" + fruit3;

//Create a functyion to add value to the array
function myFunction(){

fruit1.push("cherry");
fruit2.push("strawberry");
fruit3.push("grape");
    
    document.getElementById("output").innerHTML= fruit1 + "<br>" + fruit2 + "<br>" + fruit3;
   }
   