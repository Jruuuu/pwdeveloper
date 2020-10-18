// // Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // make variable characlength
  var characlength = parseInt(prompt("Hello, Please enter length of password. 8-128"));

  // Prompt the length of password: min range 8 - 128 characters

  while (characlength < 8 || characlength > 128 || isNaN(characlength)) {
    //make sure the alert is before the prompt
    alert("Please enter a number between 8-128");
    characlength = parseInt(prompt("Hello, Please enter length of password. 8-128"))
  };


  //alert type of characters to use
  //Confirm lowercase
  var wantLower = confirm("Would you like lowercase letters in your password?");

  //confirm uppercase
  var wantUpper = confirm("Would you like uppercase letters in your password?");

  //confirm numeric
  var wantNumber = confirm("Would you like numbers in your password?");

  //confirm special characters
  var wantSpecial = confirm("Would you like special characters in your password?");

  //possibilties string
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var number = '0123456789';
  var special = '!"#$%&()*+,-./:;<=>?@[';

  //create an array with all the possibilities
  var possibilities = "";
  if (wantLower) {
    possibilities += lower;
  }
  if (wantUpper) {
    possibilities += upper;
  }
  if (wantNumber) {
    possibilities += number;
  }
  if (wantSpecial) {
    possibilities += special;
  }

  //pick random numbers and create password
  var password = [];
  //loop through as much as user wants
  for (var i = 0; i < characlength; i++) {
    //pick random number between possibility length range
    var randomNumber = Math.floor(Math.random() * possibilities.length);
    //pick ranfdom character 
    var randomCharacter = possibilities[randomNumber];
    //puch random character
    password.push(randomCharacter);
  }

  //password = ["a","5","."]
  //concatonate the strings in array
  password.join("");
  //passowrd = "a5."

  //then put password in textarea
  //var passwordText = document.querySelector("#password").value;
  document.querySelector("#password").value = password.join("");

}
// Add event listener to generate button
document.querySelector("#generatePassword").addEventListener("click", generatePassword);
