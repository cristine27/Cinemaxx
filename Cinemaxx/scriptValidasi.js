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
    var warnaBenar = "#66cc66";
    var warnaSalah = "#ff6666";
    var pass = document.getElementById('password');
    if(pass.value.length<minchar){
        alert("Password minimal 8 karakter");
        pass.style.backgroundColor = warnaSalah;
        message.style.color = warnasalah;
        message.innerHTML = "!";
    }
    else{
      pass.style.backgroundColor = warnaBenar;
      message.style.color = warnaBenar;
      message.innerHTML = "";
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
  function phoneNum(inputText){
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

 