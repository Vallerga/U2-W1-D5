document.addEventListener("scroll", function (event) {
  const nav = document.querySelector("nav");
  if (window.scrollY >= 400) {
    nav.classList.add("newNav");
  } else {
    nav.classList.remove("newNav");
  }
});