let scrollPosition = window.scrollY;
const header = document.querySelector("nav.navbar");
const headerHeight = header.offsetHeight;
window.addEventListener("scroll", function() {
  scrollPosition = window.scrollY;
  if (scrollPosition >= 150) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

if (AOS && AOS.init) {
  AOS.init();
}
