// ########################################

/*
*	Table of Contents
*	1)	Variables
*	2)	Parent Function
*	3)	Child Functions
*	4)	Sibling Functions
*/

// ########################################
/* ------------- Variables ------------- */
// ########################################

var isFizz = function(i) {return i % 3 === 0};
var isBuzz = function(i) {return i % 5 === 0};
var isFizzBuzz = function(i) {return i % 15 === 0};

// ########################################
/* ---------- Parent Function ---------- */
// ########################################

$(document).ready(function()
{
	input();
});

// ########################################
/* ---------- Child Functions ---------- */
// ########################################

function input ()
{
	$("#fizzbuzz-form").submit(function (e) 
    {
        e.preventDefault();
        var userInput = $("input#fizzbuzz-entry").val();

        $.trim(userInput);

        // Verify user input is valid, prompt if not.
        if (!userInput) 
        {
            alert("Invalid input, please try again.");
            $(this).toggleClass("error", 1);
        }
        else if (!(parseInt(userInput))) 
        {
        	alert("Invalid input, please enter an integer.");
        }
        else if (parseFloat(userInput) % 1 != 0)
        {
        	alert("Invalid input, please enter a whole number.");
        }
        else if (!(userInput >= 1 && userInput <= 100)) 
        {
        	alert("Invalid input, please enter a number between 1 & 100.");
        }
        else
        {
        	fizz_Buzz(userInput);
        }
        $('input#fizzbuzz-entry').val("");
    });
};

// ########################################
/* ---------- Sibling Functions ---------- */
// ########################################

function fizz_Buzz (userInput)
{
	$('input#fizzbuzz-entry').empty();
	$('.fizzbuzz-container div').empty();
	userInput = parseInt(userInput);
	// Will evaluate i from 1 to 100 incrementing once every interation.
	for (var i = 1; i <= userInput; ++i) 
	{
		// Will evaluate i against i % 15 === 0.
		// If evaluated as true, FizzBuzz will print.
		// If evaluated as false it will proceed with the other checks.
		if (isFizzBuzz(i)) 
		{
			// console.log('FizzBuzz');
			$('.fizzbuzz-container .' + (i < 51)).append('FizzBuzz <br/>');
			// document.write('FizzBuzz');
			// document.write('<br/>');
		} 
		// Will evaluate i against i % 3 === 0.
		// If evaluated as true, Fizz will print.
		// If evaluated as false it will proceed with the other checks.
		else if (isFizz(i)) 
		{
			// console.log('Fizz');
			$('.fizzbuzz-container .' + (i < 51)).append('Fizz <br/>');
			// document.write('Fizz');
			// document.write('<br/>');
		} 
		// Will evaluate i against i % 5 === 0.
		// If evaluated as true, Buzz will print.
		// If evaluated as false it will proceed with the other checks.
		else if (isBuzz(i)) 
		{
			// console.log('Buzz');
			$('.fizzbuzz-container .' + (i < 51)).append('Buzz <br/>');
			// document.write('Buzz');
			// document.write('<br/>');
		// Will print the value of i every iteration that the above checks are evaluate as false.
		} else {
			// console.log(i);
			$('.fizzbuzz-container .' + (i < 51)).append(i + '<br/>');
			// document.write(i);
			// document.write('<br/>');
		}
	};
};






