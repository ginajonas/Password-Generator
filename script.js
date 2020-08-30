// Get a reference to the "Generate Password" button element
let generateBtn = document.getElementById('generate')
// Add a "click" event listener to the button that will display a new password
generateBtn.addEventListener('click', displayNewPassword)

/**
 * This `click` event handler function will generate a new password
 * and then display it as the value for the `#password` element
 * @returns {void} Nothing
 */
function displayNewPassword () {
  let password = getCriteria()
  
  let passwordText = document.getElementById('password')
  passwordText.value = password
}

/* Your solution code goes here ... */
// declaring variables
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let lowerCase = []
  for (let i = 0; i < upperCase.length;i++){
lowerCase.push(upperCase[i].toLowerCase());
  }
let numeric = ["0","1","2","3","4","5","6","7","8","9"]
let characters =["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"]
let toConfirmUppercase = []
let toConfirmLowercase = []
let toConfirmNumeric = []
let toConfirmCharacters = []
let passwordLength =[]

// All in one function
// Prompt for length of password(must be between 8 and 128 characters)
// Present choice of upper case, lower case, numeric and special characters. must choose at least one
// add choices together
// random selection of characters based on choice(s)
// generate password based on choices and length

function getCriteria() {
   passwordLength =(prompt("How many desired characters in your new password?"));
   while(passwordLength < 8 || passwordLength > 128) {
    alert("New generated Password must be between 8 to 128 characters,please input number accordingly");
    passwordLength =(prompt("How many desired characters in your new password?"));
   }
  
    toConfirmUppercase = confirm("Click OK to confirm use of uppercase characters or Cancel if not desired")
    toConfirmLowercase = confirm("Click OK to confirm use of lowercase characters or Cancel if not desired")
    toConfirmNumeric = confirm("Click OK to confirm use of numeric characters or Cancel if not desired")
    toConfirmCharacters = confirm("Click OK to confirm use of special characters or Cancel if not desired")
   
   
    while(toConfirmUppercase === false && toConfirmLowercase === false && toConfirmNumeric === false && toConfirmCharacters === false) {
      alert("Minimum of one chosen option");
    
      toConfirmUppercase = confirm("Click OK to confirm use of uppercase characters or Cancel if not desired")
      toConfirmLowercase = confirm("Click OK to confirm use of lowercase characters or Cancel if not desired")
      toConfirmNumeric = confirm("Click OK to confirm use of numeric characters or Cancel if not desired")
      toConfirmCharacters = confirm("Click OK to confirm use of special characters or Cancel if not desired")
    }
   
    let passwordChoice = []

    if (toConfirmUppercase) {
      passwordChoice = passwordChoice.concat(upperCase)
    }
    if (toConfirmLowercase) {
      passwordChoice = passwordChoice.concat(lowerCase)
    }
    if (toConfirmNumeric) {
      passwordChoice = passwordChoice.concat(numeric)
    }
    if (toConfirmCharacters) {
      passwordChoice = passwordChoice.concat(characters)
    }
    let password = (passwordChoice)
    console.log(password)
  

    let generatedPassword = ""
   

    for (let j = 0; j < passwordLength; j++){
      generatedPassword+= passwordChoice[Math.floor(Math.random() * passwordChoice.length)];
     console.log(generatedPassword)
    }
   return generatedPassword;

}