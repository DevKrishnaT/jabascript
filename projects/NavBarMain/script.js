const MenuButton = document.getElementById("Header-menu");
let Navbar = document.getElementById("navbar-main");
let closeNav = document.getElementById("closeNav");

MenuButton.addEventListener("click", () => {
  Navbar.classList.add("show");
});
closeNav.addEventListener("click", () => {
  Navbar.classList.remove("show");
});
