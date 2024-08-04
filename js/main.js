document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.getElementById("extend-navbar-btn");
  const initialIconSrc = navbarToggler.src;
  const iconCloseSrc = "images/icon-close.svg";

  navbarToggler.addEventListener("click", function () {
    if (navbarToggler.src === initialIconSrc) {
      navbarToggler.src = iconCloseSrc;
    } else {
      navbarToggler.src = initialIconSrc;
    }
  });
});
