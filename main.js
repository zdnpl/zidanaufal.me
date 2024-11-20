window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const aboutSection = document.querySelector(".about");
  const skillsSection = document.querySelector(".skills");

  const aboutPosition = aboutSection.getBoundingClientRect().top + window.scrollY;
  const skillsPosition = skillsSection.getBoundingClientRect().top + window.scrollY;
  const scrollPosition = window.scrollY;

  if (scrollPosition >= skillsPosition) {
    // Bagian skills - navbar berubah hitam
    navbar.classList.add("navbar-dark-bg", "navbar-dark");
    navbar.classList.remove("navbar-light-bg", "navbar-light");
  } else if (scrollPosition >= aboutPosition) {
    // Bagian about - navbar berubah putih
    navbar.classList.add("navbar-light-bg", "navbar-light");
    navbar.classList.remove("navbar-dark-bg", "navbar-dark");
  } else {
    // Bagian lain - navbar transparan
    navbar.classList.add("navbar-dark-bg", "navbar-dark");
    navbar.classList.remove("navbar-light-bg", "navbar-light");
  }
});
