// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// //function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");




//  passwordText.value = password;



// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



//When Click generate alerts a series of questions for password criteria
//make variable characlength
//Prompt the length of password: min range 8 - 128 characters

function generateBtn() {
var characlength = prompt("Hello, Please enter length of password. 8-128");

if (characlength === null || characlength < 8 || characlength > 128) {
    alert("Number needs to between 8-128 try again")    
} 
//   //alert type of characters to use
//   //Confirm lowercase
var  lower = confirm("Would you like lowercase letters in your password?")

//confirm uppercase
var  upper = confirm("Would you like uppercase letters in your password?")

//confirm numeric
var numbers = confirm("Would you like numbers in your password?")

//confirm special characters
var specials = confirm("Would you like special characters in your password?")

// each group should have its own function
  //if only one confirm

    // for lowercase i have to use const to set or cannot be changed, var did not work research to be done.
function lowerRandom() {
  const lower = 'abcdefghijklmnopqrstuvwxyz';
        return lower[Math.floor(Math.random() * lower.length)];
     }

     console.log(lowerRandom())
       //just for uppercase
function upperRandom() {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return upper[Math.floor(Math.random() * upper.length)];
 }

  
       //index just for numbers
function numberRandom() {
  const number = '123456789';
    return number[Math.floor(Math.random() * number.length)];
 }

       //index just for special characters
function specialRandom() {
  const special = '!"#$%&()*+,-./:;<=>?@[';
    return special[Math.floor(Math.random() * special.length)];
 }


//use index for combos
//TWO CONFIRMS
//lowercase + uppercase
//lowercase + numbers
//lowercase + specialCharacters

//THREE CONFRIMS
//lowercase + uppercase + numbers
//lowercase + specialCharacters + numbers
//uppercase + specialCharacters + numbers

//FOUR CONFIRMS
//lowercase + uppercase + numbers + specialCharacters
