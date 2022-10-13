//buttons
const experiences = document.getElementById("experience");
const competences = document.getElementById("competences");
const formation = document.getElementById("formation");
const langages = document.getElementById("langages");

//classes to show / hide
const expelem = document.getElementsByClassName("experience")[0];
const comelem = document.getElementsByClassName("competences")[0];
const forelem = document.getElementsByClassName("formation")[0];
const langelem = document.getElementsByClassName("langages")[0];

experiences.addEventListener("click", () => {
  const displayvalue = window.getComputedStyle(expelem, null).display;
  if (displayvalue === "block") expelem.style.display = "none";
  else {
    expelem.style.display = "block";
    fadeIn(expelem, 1500);
    comelem.style.display = "none";
    forelem.style.display = "none";
    langelem.style.display = "none";
  }
});

competences.addEventListener("click", () => {
  const displayvalue = window.getComputedStyle(comelem, null).display;

  if (displayvalue === "block") comelem.style.display = "none";
  else {
    comelem.style.display = "block";
    fadeIn(comelem, 1500);
    expelem.style.display = "none";
    forelem.style.display = "none";
    langelem.style.display = "none";
  }
});

formation.addEventListener("click", () => {
  const displayvalue = window.getComputedStyle(forelem, null).display;
  if (displayvalue === "block") forelem.style.display = "none";
  else {
    forelem.style.display = "block";
    fadeIn(forelem, 1500);
    comelem.style.display = "none";
    expelem.style.display = "none";
    langelem.style.display = "none";
  }
});

langages.addEventListener("click", () => {
  const displayvalue = window.getComputedStyle(langelem, null).display;
  if (displayvalue === "block") langelem.style.display = "none";
  else {
    langelem.style.display = "block";
    fadeIn(langelem, 1500);
    forelem.style.display = "none";
    comelem.style.display = "none";
    expelem.style.display = "none";
  }
});

//Question 3
function fadeIn(el, time) {
  el.style.opacity = 0;

  var last = +new Date();
  var tick = function () {
    el.style.opacity = +el.style.opacity + (new Date() - last) / time;
    last = +new Date();

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
        setTimeout(tick, 16);
    }
  };

  tick();
}

var tooltip = document.querySelectorAll('.coupontooltip');

document.addEventListener('mousemove', fn, false);

function fn(e) {
    for (var i=tooltip.length; i--;) {
        tooltip[i].style.left = e.pageX + 'px';
        tooltip[i].style.top = e.pageY + 'px';
    }
}