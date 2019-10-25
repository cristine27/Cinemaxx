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