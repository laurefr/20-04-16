
var Event1 = document.getElementById("button1");
Event1.addEventListener("click", local, false);

function local (){
    
    var text = "";
    var i = 1;
    while (i <=10){
        text+= " the number is  "+ i + "<br>";
        i++;
    }
    document.getElementById("output").innerHTML = text;
}



