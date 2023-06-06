var animationActive = false;
var image = document.getElementById("myImage");

function toggleAnimation() {
  if (animationActive) return;

  image.src = darkThemeToggle ? "light-mode.gif" : "dark-mode.gif";
  animationActive = true;
  toggleTheme();
  setTimeout(function () {
    animationActive = false;
    updateStaticThemeImage();
  }, 500);
}

var darkThemeToggle = false;

function toggleTheme() {
  darkThemeToggle = !darkThemeToggle;
}

const checkbox = document.getElementById("hidden-checkbox");
const label = document.querySelector("label");
const paragraphs = document.querySelectorAll("p");
const headings1 = document.querySelectorAll("h1");
const headings3 = document.querySelectorAll("h3");
const links = document.querySelectorAll("a");
const hobbies = document.querySelectorAll(".hobby");
const skill = document.querySelectorAll(".skill");
const portfolio = document.querySelectorAll(".portfolio");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    paragraphs.forEach((paragraph) => paragraph.classList.add("covered"));
    headings1.forEach((heading) => heading.classList.add("covered"));
    headings3.forEach((heading) => heading.classList.add("covered"));
    links.forEach((link) => link.classList.add("covered"));
    hobbies.forEach((hobby) => hobby.classList.add("covered"));
    skill.forEach((skill) => skill.classList.add("covered"));
    portfolio.forEach((portfolio) => portfolio.classList.add("covered"));
  }else {
    paragraphs.forEach((paragraph) => paragraph.classList.remove("covered"));
    headings1.forEach((heading) => heading.classList.remove("covered"));
    headings3.forEach((heading) => heading.classList.remove("covered"));
    links.forEach((link) => link.classList.remove("covered"));
    hobbies.forEach((hobby) => hobby.classList.remove("covered"));
    skill.forEach((skill) => skill.classList.remove("covered"));
    portfolio.forEach((portfolio) => portfolio.classList.remove("covered"));
  }
});
