$(function() {

 $(document).keydown(function(keyPressed) {
   if (keyPressed.keyCode == '65') {
     $("h1").css("color","PowderBlue");
   } else if (keyPressed.keyCode == '66') {
    $("h1").css("color","steelblue");
   } else if (keyPressed.keyCode == '67') {
    $("h1").css("color","skyblue");
   } else if (keyPressed.keyCode == '68') {
    $("h1").css("color","midnightblue");
   } else if (keyPressed.keyCode == '69') {
    $("h1").css("color","black");
   } 
  });


  var position = $(window).scrollTop(); 
  
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if(scroll > position) {
    console.log('scrollDown');
    $('body').css("background-color","lightblue");
 } else {
    console.log('scrollUp');
    $('body').css("background-color", "white"); 
 }
 position = scroll;

});


});
