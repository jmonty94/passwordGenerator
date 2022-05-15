// Assignment Code
const generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  //makes the password variable equal to the generatePassword function
  var password = generatePassword();
  // sets the passwordText variable to the password ID in HTML
  var passwordText = document.querySelector("#password");
  // sets passwordText value equal to the value of password
  passwordText.value = password;
}
// set ths generate variable equal to a function that calls the following variables
const generate = function (special, capital, lower, nums, passwordLength) {
  // sets genPass to an empty string
  let genPass = ''
  //creates a constant variable equalt to the properties listed
  const charTypes = special + capital + lower + nums;
  //creates a constant variable object with set properties
  const randomFunction = {
    // lines 22-25 contain object values
    special: getSpChar,
    capital: getCapLtrs,
    lower: getLowLtrs,
    nums: getUseNum,
  };
  //sets charArray with the following properties and their booleans
  let charArray = [{ special }, { capital }, { lower }, { nums }].filter(item =>
    Object.values(item)[0]);
  console.log(charArray)
  //depnding upon the result of the confirmation booleans returns a number corresponding
  if (charTypes === 0) {
    return ''
  }
  console.log(charTypes);
  // for loop that returns the value of the initial password value
  for (let index = 0; index < passwordLength; index += charTypes) {
    charArray.forEach(type => {
      let functionNames = Object.keys(type)[0];
      genPass += randomFunction[functionNames]()
    })
    password = genPass.slice(0, passwordLength)
    console.log(password);
  }
  /* function that generates the value of getSpChar which fulfills the special value of the 
  randomFunction variable
  */
  function getSpChar() {
    let spChar = "`~!@#$%^&*()-_=+[]{}|/?.>,<*';:"
    return spChar[Math.floor(Math.random() * spChar.length)]
  }
  /* function that generates the value of getCapLtrs which fulfills the capital value of the 
randomFunction variable
*/
  function getCapLtrs() {
    let capLtrs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return capLtrs[Math.floor(Math.random() * capLtrs.length)]
  }
  /* function that generates the value of getLowLtrs which fulfills the lower value of the 
randomFunction variable
*/
  function getLowLtrs() {
    let lowLtrs = "abcdefghijklmnopqrstuvwxyz"
    return lowLtrs[Math.floor(Math.random() * lowLtrs.length)]
  }
  /* function that generates the value of getUseNum which fulfills the nums value of the 
randomFunction variable
*/
  function getUseNum() {
    let useNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return useNum[Math.floor(Math.random() * useNum.length)];
  }
  // Function that shuffles the initial value of password to create a truly randomized result
  function shuffle(p) {
    let finalPass = p.split("")
    finalPass.sort(function () {
      return 0.5 - Math.random();
    })
    p = finalPass.join("")
    return p
  }
  console.log(shuffle(password));
  // equates password to the final randomized value
  password = shuffle(password);
  // returns the value of password at the end of the function
  return password
}
// initial variable that begins when the user pressed the button
const generatePassword = function () {
  //initial prompt for user to declare the value of passwordLength 
  const passwordLength = parseInt(prompt("Enter a length you would like your password to be"));
  // if the initial value matches the set parameters of a password requirement passes the belowcode
  if (passwordLength >= 8 && passwordLength <= 128) {
    // if the value provided by the customer does not match the parameters of the passwordLength it alerts and ends the function
  } else if (passwordLength < 8 || passwordLength > 128) {
    console.log(68);
    alert("Please enter a valid whole number between 8-128");
    return;
    //if the value provided by the customer is not a number it alerts and ends the function
  } else if (passwordLength !== Number) {
    console.log(71);
    alert("Please enter a valid whole number between 8-128");
    return;
  }
  //sets variable for the boolean result of the following confirms
  const upperCase = window.confirm("would you like to use Uppercase Letters?");
  const lowLtrs = window.confirm("Would you like to use lower case letters?");
  const num = window.confirm("Would you like to use numbers?");
  const spec = window.confirm("Would you like to use special characters?");
  //triggers generate function with the following variables
  generate(spec, upperCase, lowLtrs, num, passwordLength);
  //returns password variable
  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);