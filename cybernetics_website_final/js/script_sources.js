// Scroll and other effects

// Detect request animation frame
var scroll = window.requestAnimationFrame ||
  // IE Fallback
  function(callback) {
    window.setTimeout(callback, 1000 / 60)
  };
var elementsToShow = document.querySelectorAll('.show-on-scroll');

var elementsToShow = document.querySelectorAll('.show-on-scroll');


// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 &&
      rect.bottom >= 0) ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

// Reveal sections based on user input and scrolling
function customLoop() {

  elementsToShow.forEach(function(element, i) {

    if (isElementInViewport(element)) {
      element.classList.add('is-visible');

    } else {
      element.classList.remove('is-visible');
    }


  });

  scroll(customLoop);
}

// Call the loop for the first time
customLoop();


// JS for Extras section
// Hover effect

// function on() {
//   document.getElementById("overlay").style.display = "block";
// }
//
// function off() {
//   document.getElementById("overlay").style.display = "none";
// }
