var user_input = prompt("Please enter a number between 1 and 100");

var i = parseInt(user_input);

if (isNaN(i)) {
	alert("this is not a number");
}
else {
for (var n = 1; n <= i; n++) {
  
 if ((n % 5 == 0) && (n % 3 == 0)) {
    $('div').append("<br>fizzbuzz"); 
  }
  else if (n % 3 == 0) {
    $('div').append("<br>fizz");
  }
  else if (n % 5 == 0) {
    $('div').append("<br>buzz");
  }
  else {
      $('div').append('<br>'+n);
  }
 }
};