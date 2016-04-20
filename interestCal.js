// create an event listener
var Event1 = document.getElementById("button1");
event1 = addEventListener("click", myInterest, false);

function myInterest(){
    
    var userinput = document.getElementById("box").value;
    var userinput2 = document.getElementById("box2").value;
    var userinput3 = document.getElementById("box3").value;
    
    var loan = parseInt(userinput);
    var rate = parseInt(userinput2);
    var term = parseInt(userinput3);
    //var text="";
    
   var interest = ((loan) * (rate/100) * (term));
    //text ="The total interest you will pay is" + "br" + "£";
    
     var monthlyRepayement = ((interest)/(term)*12);
    //text =" your monthly repayement will be" + "br" + "£";
    

    document.getElementById("output").innerHTML ="The total interest you will pay is"  + "£" + interest;
   
    document.getElementById("output2").innerHTML = "The total interest you will pay is"  + "£" + monthlyRepayement;
}