
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here
var lowercaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialChars = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Input
function generatePassword() {

var numberofChars = window.prompt("How many characters do you want in your password?");
var isLowercase = window.confirm("Do you want to include lowercase?");


for (let i = 0; i < numberofChars; i++) {
  if (isLowercase) {
    var randomLowercase = Math.floor(Math.random() * lowercaseChars.length);
    var lowercaseOutcome = lowercaseChars[randomLowercase];
    console.log(lowercaseOutcome);
  }
}
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
