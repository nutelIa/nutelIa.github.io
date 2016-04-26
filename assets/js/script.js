$(document).ready(function() {
  $("#buddah").click(function() {
    $("#buddah-pic").fadeIn(600);
    $('#carousel').children("*").not("#buddah-pic").fadeOut(300);
  });

  $("#standing-split").click(function() {
    $("#standing-split-pic").fadeIn(600);
    $('#carousel').children("*").not("#standing-split-pic").fadeOut(300);
  });

  $("#cool-thing").click(function() {
    $("#cool-thing-pic").fadeIn(600);
    $('#carousel').children("*").not("#cool-thing-pic").fadeOut(300);
  });

  $("#bended-lunge").click(function() {
    $("#bended-lunge-pic").fadeIn(600);
    $('#carousel').children("*").not("#bended-lunge-pic").fadeOut(300);
  });

  $("#downward-dog").click(function() {
    $("#downward-dog-pic").fadeIn(600);
    $('#carousel').children("*").not("#downward-dog-pic").fadeOut(300);
  });

  $("#fetal-position").click(function() {
    $("#fetal-position-pic").fadeIn(600);
    $('#carousel').children("*").not("#fetal-position-pic").fadeOut(300);
  });

  $("#hand").click(function() {
    $("#hand-pic").fadeIn(600);
    $('#carousel').children("*").not("#hand-pic").fadeOut(300);
  });

  $("#headstand").click(function() {
    $("#headstand-pic").fadeIn(600);
    $('#carousel').children("*").not("#headstand-pic").fadeOut(300);
  });

  $("#sitting-vertical-split").click(function() {
    $("#sitting-vertical-split-pic").fadeIn(600);
    $('#carousel').children("*").not("#sitting-vertical-split-pic").fadeOut(300);
  });

  $("#standing-halfsplit").click(function() {
    $("#standing-halfsplit-pic").fadeIn(600);
    $('#carousel').children("*").not("#standing-halfsplit-pic").fadeOut(300);
  });

  $("#starfish").click(function() {
    $("#starfish-pic").fadeIn(600);
    $('#carousel').children("*").not("#starfish-pic").fadeOut(300);
  });

  $("#tree-pose").click(function() {
    $("#tree-pose-pic").fadeIn(600);
    $('#carousel').children("*").not("#tree-pose-pic").fadeOut(300);
  });

  $("#plank").click(function() {
    $("#plank-pic").fadeIn(600);
    $('#carousel').children("*").not("#plank-pic").fadeOut(300);
  });

  $("#bent-headstand").click(function() {
    $("#bent-headstand-pic").fadeIn(600);
    $('#carousel').children("*").not("#bent-headstand-pic").fadeOut(300);
  });

  $("#mail").click(function() {
    $("#modal-container").fadeIn(500);
  });

  $(".box-button").click(function() {
    $("#modal-container").fadeOut(500);
  });
  
  $("#modal-overlay").click(function() {
    $("#modal-container").fadeOut(500);
  });

  $(".one").hover(function() {
    $("#about1").removeClass("inactive");
    $('#about-img').children("*").not("#about1").addClass("inactive");
  });

  $(".two").hover(function() {
    $("#about2").removeClass("inactive");
    $('#about-img').children("*").not("#about2").addClass("inactive");
  });

  $(".three").hover(function() {
    $("#about3").removeClass("inactive");
    $('#about-img').children("*").not("#about3").addClass("inactive");
  });

  $(".four").hover(function() {
    $("#about4").removeClass("inactive");
    $('#about-img').children("*").not("#about4").addClass("inactive");
  });

  $(".five").hover(function() {
    $("#about5").removeClass("inactive");
    $('#about-img').children("*").not("#about5").addClass("inactive");
  });

  /* source: http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll */
  $("a").on('click', function(event) {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 850, function(){
      window.location.hash = hash;
    });
  });
});