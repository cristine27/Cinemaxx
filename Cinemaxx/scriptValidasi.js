// validasi form sign up
function validasi_input(){
    var name = document.forms["signUpForm"]["name"];
    var email = document.forms["signUpForm"]["email"];
    var password = document.forms["signUpForm"]["password"];

    if(name.value == ""){
      window.alert("Please enter your name.");
      name.focus();
      return false;
    }

    if(email.value == ""){
      window.alert("Please enter your email");
      email.focus();
      return false;
    }

    if(password.value == ""){
      window.alert("Please enter your password");
      email.focus();
      return false;
    }
    return true;
  }

//   validasi password sign up
  function checkPass(){
    var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

//   validasi login
  function validateForm(){
      var username = document.loginForm.email.value;
      var pw = document.loginForm.pswd.value;

      var uname = "melody@unpar.ac.id"
      var password = "test123"

      if((username==uname) && (pw==password)){
            alert("Welcome");
            return true;
      }
      else{
          alert("Login was unsuccessful, please check your username and password");
          return false;
      }
  }

//   validasi phone number
  function phoneNum(){
    var inputText = document.getElementById("nump").textContent;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(inputText.value.match(phoneno)){
        alert("Your booking was success");
        return true;
    }
    else{
        alert("Not a valid phone number");
        return false;
    }
  }
}
 