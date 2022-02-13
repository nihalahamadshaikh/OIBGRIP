var numberString = "";
var inputButtons = document.querySelectorAll( ".numbers" );
var clear = document.querySelector( ".clear" );
var enter = document.querySelector( ".enter" );
var input = document.querySelector( ".input" );

//Listens for clicks on all number and operations buttons
for ( var i = 0; i < inputButtons.length; i++ ) {
	inputButtons[ i ].addEventListener( "click", ( function( i ) {
		return function() {
			console.log( i );
			console.log( inputButtons[ i ].innerHTML );
			//Sets evaluation number to newly clicked amount.
			numberString += inputButtons[ i ].innerHTML;
			//Resets the value shown on screen to match new value
			input.value = numberString;
		}
	} ( i ) ) );
}

enter.addEventListener( "click", function() {
	console.log( this);
	//Sets string to equal itself evaluated
	numberString = eval(numberString);
	console.log( numberString );
	//Resets the value shown on screen to match new value
	input.value = numberString;
});


clear.addEventListener( "click", function() {
	//Resets the value shown on screen to be empty
	numberString = "";
	input.value = numberString;
});