// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword = function() {
    let passwordLength = parseInt(prompt("Enter a length you would like your password to be"));
      if (passwordLength > 8 && passwordLength < 128) {
        confirm("is " + passwordLength + " correct?")
      }
        else if (passwordLength < 8 || passwordLength > 128) {
        alert("Please enter a valid whole number between 8-128")
        }
        else if (passwordLength !== Number) {
        alert("Please enter a valid whole number between 8-128")
        }
//Asks if you would like special characters included in your new password        
    let spChar ;
      if (confirm("Would you like to use special characters?")) {
        spChar = ["`~!@#$%^&*()-_=+[]{}|/?.>,<*';:"]
      }
        else {
          spChar = false
        }
    console.log(spChar)
    let capLtrs ;
        if (confirm("would you like to use Capital Letters?")) {
          capLtrs = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
        }
          else {
            capLtrs = false
          }
    console.log(capLtrs)
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 


