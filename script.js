
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

if(numberofChars < 8 || numberofChars > 128) {
  alert("bad character length")
  return "Error"
}

var isLowercase = window.confirm("Do you want to include lowercase?");
var isUppercase = window.confirm("Do you want to inclue uppercase?");
var isNumeric = window.confirm("Do you want to include numbers?");
var isSpecial = window.confirm("Do you want to include special characters?");
var possibleChars = [];

if (isLowercase) {
  possibleChars = possibleChars.concat(lowercaseChars);
}

if (isUppercase) {
  possibleChars = possibleChars.concat(uppercaseChars);
}

if (isNumeric) {
  possibleChars = possibleChars.concat(numericChars);
}

if (isSpecial) {
  possibleChars = possibleChars.concat(specialChars);
}

var generatedPasswords = "";

for (let i = 0; i < numberofChars; i++) {
  var randomLetterIndex = Math.floor(Math.random()* possibleChars.length);
  var randomLetter = possibleChars[randomLetterIndex];
  generatedPasswords += randomLetter

  // if (isLowercase) {
    // var randomLowercase = Math.floor(Math.random() * lowercaseChars.length);
    // var lowercaseOutcome = lowercaseChars[randomLowercase];
    // console.log(lowercaseOutcome);
  // }

}
return generatedPasswords
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
