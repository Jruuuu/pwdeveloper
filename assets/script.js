// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");

 // passwordText.value = password;



// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



//When Click generate alerts a series of questions for password criteria
//make variable characlength
//Prompt the length of password: min range 8 - 128 characters

// function generateBtn() {
// var characlength = prompt("Hello, Please enter length of password. 8-128");

// if (characlength === null || characlength < 8 || characlength > 128) {
//     alert("Number needs to between 8-128 try again")    
// } 
//   //alert type of characters to use
//   //Confirm lowercase
//   else{
//     confirm("Would you like lowercase letters in your password?")
//   }
//   }



//alert type of characters to use
//Confirm lowercase

//confirm uppercase
//confirm numeric
//confirm special characters


// each group should have its own function
    // for lowercase i have to use const to set, var did not work research to be done.
    function lowerRandom() {
      let lower = 'abcdefghijklmnopqrstuvwxyz';
        return lower[Math.floor(Math.random() * lower.length)];
     }
       //just for uppercase
function upperRandom() {
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return upper[Math.floor(Math.random() * upper.length)];
 }
console.log(upperRandom());
  

//       //index just for numbers
// function numberRandom() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

//       //index just for special characters
// function specialRandom() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }      

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
