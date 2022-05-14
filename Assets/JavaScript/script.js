// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
const generate = function (special,capital,lowerCase,numbers,passwordLength) {
  let genPass =''
  const charTypes = special + capital + lowerCase + numbers;
  const randomFunction = {
    special: getSpChar,
    capital: getCapLtrs,
    lowerCase: getLowLtrs,
    numbers: getUseNum,
  };
  let charArray = [{special},{capital},{lowerCase},{numbers}].filter( item => 
  Object.values(item)[0]);
    if (charTypes === 0){
      return ''
  }
  console.log(charArray);
  for (let index = passwordLength; index+=charTypes;) {
    charArray.forEach(type => {let functionNames = Object.keys(type)[0];
    genPass += randomFunction [functionNames]()})
    password = genPass.slice(0,passwordLength) 
 }
  console.log(special,capital,lowerCase,numbers,passwordLength);
  function getSpChar () {
   let spChar = "`~!@#$%^&*()-_=+[]{}|/?.>,<*';:"
    return spChar[Math.floor(Math.random() * spChar.length)]
  }
  function getCapLtrs () {
    let capLtrs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return capLtrs[Math.floor(Math.random() * capLtrs.length)]}
  function getLowLtrs () {
    let lowLtrs = "abcdefghijklmnopqrstuvwxyz"
    return lowLtrs[Math.floor(Math.random() * lowLtrs.length)]
  }
  function getUseNum () {
      let useNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      return useNum[Math.floor(Math.random() * useNum.length)];
    }
    console.log(getSpChar,getCapLtrs,getLowLtrs,getUseNum);
    getUseNum()
 console.log(password);
 generate(special,capital,lowerCase,numbers,passwordLength)
 return password;
}
const generatePassword = function () {
  const passwordLength = parseInt(prompt("Enter a length you would like your password to be"));
  // let password = '';
  if (passwordLength >= 8 && passwordLength <= 128) {
    confirm("is " + passwordLength + " correct?")
    //The following variables trigger prompts        
  } else if (passwordLength < 8 || passwordLength > 128) {
    console.log(68);
    alert("Please enter a valid whole number between 8-128");
    // generatePassword();
    return;
  } else if (passwordLength !== Number) {
    console.log(71);
    alert("Please enter a valid whole number between 8-128");
    // generatePassword();
    return;
  }
  const upperCase = window.confirm("would you like to use Uppercase Letters?");
  const lowLtrs = window.confirm ("Would you like to use lowercase letter?");
  const num = window.confirm ("Would you like to use numbers?");
  const spec = window.confirm ("Would you like to use special characters?");
  // console.log(upperCase,lowLtrs,num,spec,passwordLength);
  // console.log("This is the pass", password);
  generate(spec, upperCase, lowLtrs, num, passwordLength);
  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);