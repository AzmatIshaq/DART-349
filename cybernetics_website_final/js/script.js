// Scroll and other effects

// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll');
elementsToShow.forEach(function (element) {
  console.log(element.id)
})

let choicePressed = false;

function customLoop() {

  elementsToShow.forEach(function (element) {

    if((element.id === 'connect' && choicePressed === true) || element.id !== 'connect') {


    if (isElementInViewport(element)) {
      element.classList.add('is-visible');

    } else {
      element.classList.remove('is-visible');
    }
  }

  //   if((element.id === 'test' && choicePressed === true) || element.id !== 'test') {
  //
  //   if (isElementInViewport(element)) {
  //     element.classList.add('is-visible');
  //
  //   } else {
  //     element.classList.remove('is-visible');
  //   }
  // }


  });

  scroll(customLoop);
}

// Call the loop for the first time
customLoop();



document.getElementById("feedback-reveal"). addEventListener("click", function(){
  document.getElementById("choice").style.display = "block";
  choicePressed = true;
})

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

// jQuery

// $( function() {
  $( ".drag-model-text" ).draggable();
// } );
