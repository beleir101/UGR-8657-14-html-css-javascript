const openMenu = document.querySelector(".open-menu");

const closeMenu = document.querySelector(".close-menu");
const offcanvasMenu = document.querySelector(".offcanvas-menu");
const sub = document.getElementById("submitted");

openMenu.addEventListener("click", function (e) {
  e.preventDefault();
  offcanvasMenu.classList.add("active");
});
closeMenu.addEventListener("click", function (e) {
  e.preventDefault();
  offcanvasMenu.classList.remove("active");
});
sub.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Message Sent Succesfully.");
});
