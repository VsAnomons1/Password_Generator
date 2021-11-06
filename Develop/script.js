// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var passwordLength = prompt("Password length: Must be at least 8 characters but can not exceed more than 128.");
  var characterTypes = [];
    if(passwordLength >= 8 && passwordLength <= 128){
      var isLowercase = confirm("Do you want to include lowercase in your password?")
      var isUppercase = confirm("Do you want to include uppercase in your password?")
      var isNumeric = confirm("Do you want to include numbers in your password?")
      var isSpecialChars = confirm("Do you want to include special characters in your password?")
  
        if(isLowercase){
          var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
          characterTypes.push(lowercaseLetters);
        }
        if(isNumeric){
          var numbers = "0123456789";
          characterTypes.push(numbers); 
        }
        if(isUppercase){
          var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          characterTypes.push(letters);
        }
        if(isSpecialChars){
          var specialCharacters = "/[!@#$%^&*()_+-=[]{};':|,.<>/?]+/";
          characterTypes.push(specialCharacters);
        }
          if(characterTypes.length >= 1){
              var password = "";
                for(var i = 0; i < passwordLength; i++){
                  var characterList = characterTypes[Math.floor(Math.random() * (Math.floor(characterTypes.length) - Math.ceil(0)) + 0)]
                    password += characterList[Math.floor(Math.random() * (Math.floor(characterList.length) - Math.ceil(0)) + 0)]
                }
          }
          else{
            alert("Password must contain at least one character type")
          }
    }
    else
    {
      alert("The password must be 8 to 128 characters long")
    }
  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

