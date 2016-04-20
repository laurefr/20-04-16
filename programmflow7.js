
var Event1 = document.getElementById("button1");
Event1.addEventListener("click", local, false);
var text = "";
function local() {
    for (var i = 1; i <= 10; i++){
         text += "The number in the outer loop is " + i + "<br>"; 
        for (var j = 1; j <= 10; j++){
        text += "     The number in the inner loop is " + j + "<br>";
       }
     }
    
    document.getElementById("output").innerHTML = text;
    }






