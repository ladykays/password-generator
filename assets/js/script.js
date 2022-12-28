// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Function to prompt user for password options
function getPasswordOptions() {
  // The parseInt function is used to parse the user's input and convert it to an integer
  var passwordLength = parseInt(prompt("How many characters would you like for your password?\nPassword must be a minimum of 10 and a maximum of 64 characters!"));

  // Validate user response to 'passwordlength' prompt
    // isNaN function is used to validate if 'passwordLength' is not a number
    if (isNaN(passwordLength)) {
      alert("Password length must be a NUMBER between 10 and 64!");
    }
    // Check if the value of  'passwordlength' variable is a number that is between 10 and 64 
    if (passwordLength < 10 || passwordLength > 64) {
      alert("Password must be a minimum of 10 and a maximum of 64 characters long!");
      return;
    }

  // Create an object to store the password options indicated by the user. Properties have been set t false cos none of them has been selected by the user
  var passwordOptions = {
    passwordLength: passwordLength,
    hasLowerCase: false,
    hasUpperCase: false,
    hasNumbers: false,
    hasSpecials: false
  };

  // Confirm characters to include
  passwordOptions.hasLowerCase = confirm("Would you like to include lowercase characters in your password?");
  passwordOptions.hasUpperCase = confirm("Would you like to include uppercase characters in your password?");
  passwordOptions.hasNumbers = confirm("Would you like to include numerical characters in your password?");
  passwordOptions.hasSpecials = confirm("Would you like to include special characters in your password?");

  // Validate user response to password options 
   // Use a for loop to continue asking the user about the types of characters to include in the password until at least one of the properties of the object is 'true'
   for (;;) { // The three parts of the loop are left empty  so the loop will run indefinitely until a specific condition is met
    if (passwordOptions.hasLowerCase || passwordOptions.hasUpperCase || passwordOptions.hasNumbers || passwordOptions.hasSpecials) {
      break;
    }
    alert("You must select at least one character type to include in your password!");
    passwordOptions.hasLowerCase = confirm("Would you like to include lowercase characters in your password?");
    passwordOptions.hasUpperCase = confirm("Would you like to include uppercase characters in your password?");
    passwordOptions.hasNumbers = confirm("Would you like to include numerical characters in your password?");
    passwordOptions.hasSpecials = confirm("Would you like to include special characters in your password?");
  }

  
  /*
  // Use a while loop to continue asking the user about the types of characters to include in the password untill at least one of the properties of the object is 'true'
  
  while ((passwordOptions.hasLowerCase === false) &&(passwordOptions.hasUpperCase === false) &&(passwordOptions.hasNumbers === false) &&(passwordOptions.hasSpecials === false)) 
  {
    alert("You must select at leat one character type to include in your password!");
    passwordOptions.hasLowerCase = confirm("Would you like to include lowercase characters in your password?");
    passwordOptions.hasUpperCase = confirm("Would you like to include uppercase characters in your password?");
    passwordOptions.hasNumbers = confirm("Would you like to include numerical characters in your password?");
    passwordOptions.hasSpecials = confirm("Would you like to include special characters in your password?");
  }
  */

  // Return password options
  return passwordOptions;

} // Function getPasswordOptions closes

console.log(getPasswordOptions());


// Function for getting a random element from an array
function getRandom(arr) {
  // Generate a random number between 0 and the length of the array
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
} 


// Function to generate password with user input
function generatePassword() {
  // Get password options
  var options = getPasswordOptions(); // Call 'getPasswordOption' functon and store the returned value in a variable
  var password = ""; // Variable to store password 
  var selectedCharacters = []; // Declare a variable to store selected characters as an array

  // If option 'hasLowerCase' is selected, add lowercase characters to selected characters array 
  if (options.hasLowerCase) {
    selectedCharacters = selectedCharacters.concat(lowerCasedCharacters);
  }

  // If option 'hasUpperCase' is selected, add uppercase characters to selected characters array 
  if (options.hasUpperCase) {
    selectedCharacters = selectedCharacters.concat(upperCasedCharacters);
  }

  // If option 'hasNumber' is selected, add numeric characters to selected characters array 
  if (options.hasNumbers) {
    selectedCharacters = selectedCharacters.concat(numericCharacters);
  }

  // If option 'hasSpecials' is selected, add lowercase characters to selected characters array 
  if (options.hasSpecials) {
    selectedCharacters = selectedCharacters.concat(specialCharacters);
  }

  // Loop throught the passwordLength specified by the user
  for (var i = 0; i < options.passwordLength; i++) {
    // Get a random characcter from the selected characters array
    var character = getRandom(selectedCharacters); // Calls the getRandom function and passes it the 'selectedCharacters' array as an arguement

    // Add the character variable to the password string
    password += character;
  }
  // Return the generated password
  return password;

} // Function generatePassword closes


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
