//Javascipt and Jquery for CalculatorApp
//Code inside the $(document). ready() function will only run once the page Document Object Model (DOM) is ready for Javascript code to execute.
$(document).ready(function (){
    //Append method will run if the user clicks on any of the keys on the calculator except for the "AC" button or the "=" button.  It will append and numbers and functions in the calculatorInput field to display to the user.
    $('.inputElements').click(function () {
        $('#calculatorInput').append($(this).text());     
      
    });
    //Empty method will run if the user clicks the "AC" button. It will empty out the calculatorInput field that is displayed to the user.
    $('.clear').click(function () {
        $('#calculatorInput').empty();
    });
     //Eval method will run if the user clicks the "=" button. It will call the javascript eval() method using the calculatorInput the User entered. The eval method is within a try, catch block so if it returns an error, the catch block will display an alert window with a message.  Otherwise, if no errors are returned from the eval() method, then it will return the calculated value to the display. 
    $('.evaluate').click(function () {
        try {
        calcOut = eval($('#calculatorInput').text());
        console.log(calcOut);
        $('#calculatorInput').text(calcOut);
        }
        catch (e) {
            alert('something went wrong.  sorry about that');   
        }
    
    });
});


