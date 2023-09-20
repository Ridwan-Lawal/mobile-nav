const menu = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");

menu.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("hamburger-inner") ||
    e.target.classList.contains("hamburger-box")
  ) {
    console.log(e.target.className);
    e.target.closest(".hamburger").classList.toggle("is-active");
    e.target
      .closest(".nav-section")
      .nextElementSibling.classList.toggle("w-1/2");
    e.target.closest(".nav-section").nextElementSibling.classList.toggle("w-0");
    e.target
      .closest(".z-10")
      .previousElementSibling.classList.toggle("text-white");
  }
});
