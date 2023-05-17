function menuShow() {
  const toggleIcon = document.getElementById("toggle__icon");
  const mobileMenu = document.getElementById("mobile__menu");

  //change icon
  if (toggleIcon.children[0].getAttribute("icon") === "ic:sharp-menu") {
    toggleIcon.children[0].setAttribute("icon", "ic:sharp-close");
  } else {
    toggleIcon.children[0].setAttribute("icon", "ic:sharp-menu");
  }

  //   show and hide menu
  mobileMenu.classList.toggle("hidden");
}

// hide down arrow when menu gets position sticky
let downArror = document.getElementById("down__arrow");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 500) {
    downArror.style.display = "none";
  } else {
    downArror.style.display = "block";
  }
});
