var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

function passwordOptions() {

  var length = parseInt(
    prompt("How many characters do you want your password to be?")
  )

  if (isNaN(length) === true) {
    alert("Please enter a number!");
    return

  }
  if(length < 8) {
    alert("Password needs to be atleast 8 characters.");
    return
  }

  if(length > 128) {
    alert("Password needs to be less than 128 characters.");
    return
  }

  var hasNumbers = confirm("Click OK to confirm you want to use numbers.");
  var hasSpecialChars = confirm("Click OK if you want special characters.");
  var hasLowerCaseChars = confirm("Click OK if you want lower case letters.");
  var hasUpperCaseChars = confirm("Click OK if you want upper case letters.");

  if (hasNumbers === false && hasSpecialChars === false && hasLowerCaseChars === false && hasUpperCaseChars === false) {
    alert("Please select atleast one option.");
    return
  }

  var userInputs = {
    length: length,
    hasNumbers: hasNumbers,
    hasSpecialChars: hasSpecialChars,
    hasLowerCaseChars: hasLowerCaseChars,
    hasUpperCaseChars: hasUpperCaseChars
  }

  return userInputs;

}

function generatePassword() {
  var options = passwordOptions();
  var a = [];
  var b = [];
  var c = [];
  var myGeneratedNumber;
  var myGeneratedSpecialChar;
  var myGeneratedUpperCaseLetter;
  var myGeneratedLowerCaseLetter;
  var myGeneratedPassword;
  // for (var i = 0; i < length; i++) {
    if (options.hasNumbers) {
      var randNumeric = Math.floor(Math.random() * numericCharacters.length) + 1;
      // alert(numericCharacters[randNumeric]);
      myGeneratedNumber = numericCharacters[randNumeric];
      myGeneratedPassword = myGeneratedNumber;
    }
    if (options.hasSpecialChars) {
      var randSpecialChar = Math.floor(Math.random() * specialCharacters.length) + 1;
      myGeneratedSpecialChar = specialCharacters[randSpecialChar];
      myGeneratedPassword += myGeneratedSpecialChar;
    }
    if (options.hasUpperCaseChars) {
      var randUpperCase = Math.floor(Math.random() * upperCasedCharacters.length) + 1;
      myGeneratedUpperCaseLetter = upperCasedCharacters[randUpperCase];
      myGeneratedPassword += myGeneratedUpperCaseLetter;
    }
    if (options.hasLowerCaseChars) {
      var randLowerCase = Math.floor(Math.random() * lowerCasedCharacters.length) + 1;
      myGeneratedLowerCaseLetter = specialCharacters[randLowerCase];
      myGeneratedPassword += myGeneratedLowerCaseLetter;
      return myGeneratedPassword;
    }
  // }  
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
