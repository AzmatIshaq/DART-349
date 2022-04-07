// Scroll and other effects

// Detect request animation frame
var scroll = window.requestAnimationFrame ||
  // IE Fallback
  function(callback) {
    window.setTimeout(callback, 1000 / 60)
  };
var elementsToShow = document.querySelectorAll('.show-on-scroll');

var elementsToShow = document.querySelectorAll('.show-on-scroll');


let choicePressed = false;
let choicePressed2 = false;

// Reveal sections based on user input and scrolling
function customLoop() {

  elementsToShow.forEach(function(element, i) {

    if (i < 4) {
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');

      } else {
        element.classList.remove('is-visible');
      }
    } else if (element.id === 'choice' && choicePressed === true) {


      if (isElementInViewport(element)) {
        element.classList.add('is-visible');

      } else {
        element.classList.remove('is-visible');
      }
    } else if (element.id === 'connect' && choicePressed2 === true) {

      if (isElementInViewport(element)) {
        element.classList.add('is-visible');

      } else {
        element.classList.remove('is-visible');
      }

    } else if (choicePressed === true && choicePressed2 === true) {
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');

      } else {
        element.classList.remove('is-visible');
      }

    }

  });

  scroll(customLoop);
}

// Call the loop for the first time
customLoop();


document.getElementById("feedback-reveal").addEventListener("click", function() {
  document.getElementById("choice").style.display = "block";
  choicePressed = true;
})

document.getElementById("choice-yes").addEventListener("click", function() {
  document.getElementById("connect").style.display = "block";
  choicePressed2 = true;
})

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


// Back to top button
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}





// Reveal model solution

document.getElementById("test-solution-button-container").addEventListener("click", function() {
  let modelList = document.getElementsByClassName("test-model-text-1");

  for (let i = 0; i < modelList.length; i++) {
    modelList[i].style.display = "none";
  }

  document.getElementById("test-model").style.display = "none";
  document.getElementById("test-model-answers").style.display = "flex";

})


// Spinning figurine

document.getElementById("music-box-container").addEventListener("click", function() {

  document.getElementById("figurine-container").classList.add("figurine-activate")
  document.getElementById("regulation-revealed-text").style.display = "block";

})



// jQuery

// Draggable items for test knowledge section
// $( function() {
$(".drag-model-text").draggable();
// } );


// Click events for user input in introduction section

document.getElementById("i-dont-know").addEventListener("click", function() {
  // document.getElementById("dialog").style.display = "block";

    $("#dialog").dialog({
      modal: true,
    });

})

document.getElementById("choice-no").addEventListener("click", function() {
  // document.getElementById("dialog").style.display = "block";
  $("#dialog").dialog();
})
