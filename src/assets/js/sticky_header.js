// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");
var appnav = document.getElementById("app-nav");
var content = document.getElementById("content");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    appnav.style.padding = "105px";
    content.style.padding = "105px 0px 0px 0px";
  } else {
    navbar.classList.remove("sticky");
    appnav.style.padding = "0px";
    content.style.padding = "0px";
  }
}