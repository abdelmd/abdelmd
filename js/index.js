const experiences = document.getElementById("experience");
const competences = document.getElementById("competences");
const formation = document.getElementById("formation");
const langages = document.getElementById("langages");


experiences.addEventListener("click", () => {
  const elem = document.getElementsByClassName("experience")[0];
  const displayvalue = window.getComputedStyle(elem, null).display;
  displayvalue === "block"
    ? (elem.style.display = "none")
    : (elem.style.display = "block");
});

competences.addEventListener("click", () => {
  const elem = document.getElementsByClassName("competences")[0];
  const displayvalue = window.getComputedStyle(elem, null).display;
  displayvalue === "block"
    ? (elem.style.display = "none")
    : (elem.style.display = "block");
});

formation.addEventListener("click", () => {
  const elem = document.getElementsByClassName("formation")[0];
  const displayvalue = window.getComputedStyle(elem, null).display;
  displayvalue === "block"
    ? (elem.style.display = "none")
    : (elem.style.display = "block");
});

langages.addEventListener("click", () => {
  const elem = document.getElementsByClassName("langages")[0];
  const displayvalue = window.getComputedStyle(elem, null).display;
  displayvalue === "block"
    ? (elem.style.display = "none")
    : (elem.style.display = "block");
});