var scrollPosition = window.scrollY;
var header = document.querySelector("nav.navbar");
var headerHeight = header.offsetHeight;
window.addEventListener("scroll", function() {
  scrollPosition = window.scrollY;
  if (scrollPosition >= 150) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

var navButton = document.querySelector(".nav-button");
navButton.addEventListener("click", function() {
  var innerNavbar = document.querySelector(".mobile-nav");
  if (innerNavbar.classList) {
    innerNavbar.classList.toggle("opened");
  } else {
    var classes = innerNavbar.className.split(" ");
    var i = classes.indexOf("opened");

    if (i >= 0) {
      classes.splice(i, 1);
    } else {
      classes.push("opened");
    }
    innerNavbar.className = classes.join(" ");
  }
});
