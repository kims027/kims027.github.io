$(function() {
  // Your jQuery code goes inside this special $(function) call
$(document).on('click', function(event) {
  // All javascript event handlers give you information about the event type in the event argument.
  console.log(event);

  // event.preventDefault() will prevent the default click event from happening in the browser.
  // This makes it so that clicking a link doesn't actually go to that link.
  event.preventDefault();

  // You can refer to items on the event object, such as the target, which represents
  // the individual DOM element you clicked.
  var $clickTarget = $(event.target);

  $clickTarget.remove();
});

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
});