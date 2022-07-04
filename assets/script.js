var generateBtn = document.querySelector("#generate");

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~", "`", "$", "|"];

var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUppercase;
var confirmLowercase;

function generatePassword() {
  var confirmLength = (prompt("How many characters would you like to have in your password?"));
    while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password must be between 8 and 128 characters.");
      var confirmLength = (prompt("How many characters would you like to have in your password?"));
    } 
      alert(`Your password will contain ${confirmLength} characters.`);
      var confirmUppercase = confirm("Select OK if you would like to use uppercase characters.");
      var confirmLowercase = confirm("Select OK if you would like to use lowercase characters.");
      var confirmNumericCharacter = confirm("Select OK if you would like to use numeric characters.");    
      var confirmSpecialCharacter = confirm("Select OK if you would like to use special characters.");
    while(confirmUppercase === false && confirmLowercase === false && confirmNumericCharacter === false && confirmSpecialCharacter === false) {
      alert("You must select at least one character type.");
      var confirmUppercase = confirm("Select OK if you would like to use uppercase characters.");
      var confirmLowercase = confirm("Select OK if you would like to use lowercase characters.");
      var confirmNumericCharacter = confirm("Select OK if you would like to use numeric characters.");    
      var confirmSpecialCharacter = confirm("Select OK if you would like to use special characters.");
    } 
  var passwordCharacters = []
    if (confirmUppercase) {
      passwordCharacters = passwordCharacters.concat(uppercase)
    }
    if (confirmLowercase) {
      passwordCharacters = passwordCharacters.concat(lowercase)
    }
    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }       
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(special)
    }

    console.log(passwordCharacters)

  var randomPassword = ""
    
    for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword);
    }
    return randomPassword;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
document.querySelector("#generate").addEventListener("click", writePassword);
