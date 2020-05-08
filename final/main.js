$(function() {
  
  $('.tile')
    // tile mouse actions
    .on('mouseover', function(){
      $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
    })
    .on('mouseout', function(){
      $(this).children('.photo').css({'transform': 'scale(1)'});
    })
    .on('mousemove', function(e){
      $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
    })
    // tiles set up
    .each(function(){
      $(this)
        // add a photo container
        .append('<div class="photo"></div>')
        // some text just to show zoom level on current item in this example
        .append('<div class="txt"><div class="x">'+ $(this).attr('data-scale') +'x</div>ZOOM ON<br>HOVER</div>')
        // set up a background image for each tile based on data-image attribute
        .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
  
$("nav a") // loop each menu item
  .each(function(i) {
    if (i != 0) { // only clone if more than one needed
      $("park1")
        .clone()
        .attr("id", "park1" + i)
        .appendTo($(this).parent()); 
    }
    $(this).data("beeper", i); // save reference 
  })
  .mouseenter(function() {
    $("#park1-" + $(this).data("beeper"))[0].play();
  });
$("#park1").attr("id", "park1-0"); // get first one into naming convention
});
    });


var x = document.getElementById("myAudio");

function enableAutoplay() { 
  x.autoplay = true;
  x.load();
}
 
function disableAutoplay() { 
  x.autoplay = false;
  x.load();
} 
  
function checkAutoplay() { 
  alert(x.autoplay);
} 
