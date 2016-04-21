// create an event listener
//var event1 = document.getElementById("button1");
//event1.addEventListener("click", myInterest, false);

var event1 = document.getElementById("button1").addEventListener("click", myInterest, false);


function myInterest(){
    
    var loan = parseInt(document.getElementById("loanbox").value);
    var userinput2 = document.getElementById("ratebox").value;
    var userinput3 = document.getElementById("termbox").value;
    
    var rate = parseInt(userinput2);
    var term = parseInt(userinput3);
    
    //Calculations
   var interest = ((loan) * (rate/100) * (term));
    //text ="The total interest you will pay is" + "br" + "£";
    
     var monthlyRepayement = ((interest)/(term)*12);
    //text =" your monthly repayement will be" + "br" + "£";
    

    //Output
    document.getElementById("output").innerHTML ="The total interest you will pay is"  + "£" + interest;
   
    document.getElementById("output2").innerHTML = "The total interest you will pay is"  + "£" + monthlyRepayement;
}