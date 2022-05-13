// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

const getSpChar = function() {
  if (confirm("Would you like to use special characters?")) {
    spChar = ["`~!@#$%^&*()-_=+[]{}|/?.>,<*';:"]
  }
  else {
    spChar = false
  }
}
const getCapLtrs = function() {
  if (confirm("would you like to use Uppercase Letters?")) {
    capLtrs = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
  }
  else {
    capLtrs = false
  }
}
const getLowLtrs = function() {
  if (confirm("Would you like to use lowercase letter?")) {
    lowLtrs = ["abcdefghijklmnopqrstuvwxyz"]
  }
  else {
    lowLtrs = false
  }
}
const getUseNum = function () {
  if (confirm("would you like to use numbers?")) {
    useNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  }
  else {
    useNum = false
  }

}
const generatePassword = function () {
  const passwordLength = parseInt(prompt("Enter a length you would like your password to be"));
  let password = '';
  if (passwordLength >= 8 && passwordLength <= 128) {
    confirm("is " + passwordLength + " correct?")
    //Asks if you would like special characters included in your new password        
    
    const spChar = getSpChar();
    
    console.log(spChar)
  
    const capLtrs = getCapLtrs();
    
    console.log(capLtrs)
  
    const lowLtrs = getLowLtrs();
  
    console.log(lowLtrs)
    
    const useNum = getUseNum();
   
    console.log(useNum)
    
    
  } else if (passwordLength < 8 || passwordLength > 128) {
    console.log(68);
    alert("Please enter a valid whole number between 8-128");
    // generatePassword();
  } else if (passwordLength !== Number) {
    console.log(71);
    alert("Please enter a valid whole number between 8-128")
    // generatePassword();
  }
  console.log("This is the pass", password);
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


