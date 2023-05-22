function menuShow() {
  const toggleIcon = document.getElementById("toggle__icon");
  const mobileMenu = document.getElementById("mobile__menu");

  //change icon
  if (toggleIcon.children[0].getAttribute("icon") === "zondicons:menu") {
    toggleIcon.children[0].setAttribute("icon", "mingcute:close-fill");
  } else {
    toggleIcon.children[0].setAttribute("icon", "zondicons:menu");
  }

  //   show and hide menu
  mobileMenu.classList.toggle("hidden");
}

// hide down arrow when menu gets position sticky
let downArror = document.getElementById("down__arrow");

window.addEventListener(
  "scroll",
  function () {
    if (window.pageYOffset > 500) {
      downArror.style.display = "none";
    } else {
      downArror.style.display = "block";
    }
  },
  { passive: true }
);

//sticky social icon into the top
const socialIcon = document.getElementById("social__icon");
let previousTopValue = 0;

function debounce(func, delay) {
  let timeout;

  return function () {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func();
    }, delay);
  };
}

// Event listener for scrolling with debounce functionality
window.addEventListener(
  "scroll",
  debounce(() => {
    // Update the top value of the main div
    const scrollY = window.scrollY || window.pageYOffset;
    const newTopValue = 16 + scrollY;

    socialIcon.style.top = `${newTopValue}px`;
    previousTopValue = newTopValue;
  }, 100),
  { passive: true }
);
