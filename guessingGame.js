//random number
var randomNumber = Math.floor((Math.random()* 100) + 1 ); 

//listening for button click
var event1 = document.getElementById("button1");
event1.addEventListener("click" , magicNumber , false);
   
//counter 
var counter = 0;


function magicNumber(){
    //
    var userinput =document.getElementById("box").value;
    var number = parseInt(userinput);
    //var guess = parseInt(randomnumber);

     var text = "";
    if ((number<1)||(number>100));
    window.alert("Magic Number is between 1 and 100! One less guess!!")
    
    if (number < randomNumber){
        counter++;
        text = " Wrong ! your guess is to low. Try again. This is guess no. " + counter;
        tries();
        }
       
        else if (number > randomNumber){
            counter = counter + 1;
            text = " Wrong ! your guess is to high. Try again! This is guess no. " + counter;
        tries();
        }
        else {
            counter++;
           text = " Congratulations! You find the Magic number. You took " + counter + "guesses.";
        }
    
 
 //document.getElementById("demo").innerHTML = guess;
    document.getElementById("output").innerHTML = text;
     //document.getElementById("debug").innerHTML = number;
} //end of function


function tries(){
  // alert(counter);
   if (counter>5) {
       window.alert("GAME OVER!");
   }
    
}

