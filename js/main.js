document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.getElementById("extend-navbar-btn");
  const initialIconSrc = navbarToggler.src;
  const iconCloseSrc = "images/icon-close.svg";

  const backdrop = document.getElementById("navbarContent");

  navbarToggler.addEventListener("click", function () {
    if (navbarToggler.src === initialIconSrc) {
      navbarToggler.src = iconCloseSrc;
      document.body.classList.add("no-scroll");
    } else {
      navbarToggler.src = initialIconSrc;
      document.body.classList.remove("no-scroll");
    }
  });

  backdrop.addEventListener("click", function (e) {
    if (e.target.id === "navbarContent") {
      this.classList.remove("show");
      document.body.classList.remove("no-scroll");
      navbarToggler.src = initialIconSrc;
    }
  });
});
