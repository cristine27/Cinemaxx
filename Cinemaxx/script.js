(function($) {

    $(".toggle-password").click(function() {

        $(this).toggleClass("zmdi-eye zmdi-eye-off");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
      });

})(jQuery);

function openContent(obj, idContentContainer){
  var i, x, tablinks;

  x = document.getElementsByClassName("tabs");
  for(i=0; i<x.length; i++){
      x[i].style.display = "none";
  }
  document.getElementById(idContentContainer).style.display ="block";
}

var code;
function createCaptcha() {
  //clear the contents of captcha div first 
  document.getElementById('captcha').innerHTML = "";
  var charsArray =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
  var lengthOtp = 6;
  var captcha = [];
  for (var i = 0; i < lengthOtp; i++) {
    //below code will not allow Repetition of Characters
    var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
    if (captcha.indexOf(charsArray[index]) == -1)
      captcha.push(charsArray[index]);
    else i--;
  }
  var canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 100;
  canv.height = 50;
  var ctx = canv.getContext("2d");
  ctx.font = "25px Georgia";
  ctx.strokeText(captcha.join(""), 0, 30);
  //storing captcha so that can validate you can save it somewhere else according to your specific requirements
  code = captcha.join("");
  document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
}

function validateCaptcha() {
  event.preventDefault();
  debugger
  if (document.getElementById("captchaTextBox").value == code) {
    alert("Valid Captcha")
  }else{
    alert("Invalid Captcha. try Again");
    createCaptcha();
  }

  function validasi_input(form){
    var minchar = 8;
    pola_email=/^[a-ZA-Z0-9._-]+@[a-ZA-Z0-9-]+.[a-zA-Z]{2,4}$/;

    if(form.nama.value==""){
      alert("Nama harus di isi");
      form.nama.focus();
      return (false);
    }
    else if(form.email.value==""){
      alert("Email harus di isi");
      form.email.focus();
      return (false);
    }
    else if(!pola_email.test(form.email.value)){
      alert("Penulisan email tidak benar");
      form.email.focus();
      return (false);
    }
    else if(form.password.value==""){
      alert("Password harus di isi");
      form.password.focus();
      return (false);
    }
    else{
      return (true);
    }
  }

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
}