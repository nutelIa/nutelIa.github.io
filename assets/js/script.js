$(document).ready(function() {
  $("#carousel-next").click(function() {
    if (parseInt($('#carousel').css('margin-left').replace("px", "")) != -3840) {
      $("#carousel").css("margin-left", "-=960");
    } 
  });

  $("#carousel-prev").click(function() {
    if (parseInt($('#carousel').css('margin-left').replace("px", "")) != 0) {
      $("#carousel").css("margin-left", "+=960");
    }
  });
});