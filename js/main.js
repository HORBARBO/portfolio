$(window).on('load', function(){

  // Vide.js - video bg
  $('#header').vide('./video/cover', {
    bgColor:'#64947b'
  })
});


let text = "HTML верстка и разработка сайтов";
let delay = 100;
let elem = document.getElementById("holder"); 
let print_text = function(text, elem, delay) {
if(text.length > 0) {
elem.innerHTML += text[0];
setTimeout(
function() {
print_text(text.slice(1), elem, delay);
      }, delay
    );
  }
}
print_text(text, elem, delay);