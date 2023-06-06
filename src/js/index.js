var animationActive = false;
var image = document.getElementById('myImage');

const checkbox = document.getElementById('hidden-checkbox');

toggleAnimation(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

function toggleAnimation(darkThemeToggle) {
  image.src = darkThemeToggle ? 'src/assets/theme/light-mode.gif' : 'src/assets/theme/dark-mode.gif';
}

function toggleCheckbox() {
  checkbox.checked = !checkbox.checked;
  checkboxToggler();
}

function checkboxToggler() {
  toggleAnimation(checkbox.checked);
  if (checkbox.checked) {
    paragraphs.forEach((paragraph) => paragraph.classList.add('covered'));
    headings1.forEach((heading) => heading.classList.add('covered'));
    headings3.forEach((heading) => heading.classList.add('covered'));
    links.forEach((link) => link.classList.add('covered'));
    hobbies.forEach((hobby) => hobby.classList.add('covered'));
    skill.forEach((skill) => skill.classList.add('covered'));
    portfolio.forEach((portfolio) => portfolio.classList.add('covered'));
    header.classList.add('covered');
  } else {
    paragraphs.forEach((paragraph) => paragraph.classList.remove('covered'));
    headings1.forEach((heading) => heading.classList.remove('covered'));
    headings3.forEach((heading) => heading.classList.remove('covered'));
    links.forEach((link) => link.classList.remove('covered'));
    hobbies.forEach((hobby) => hobby.classList.remove('covered'));
    skill.forEach((skill) => skill.classList.remove('covered'));
    portfolio.forEach((portfolio) => portfolio.classList.remove('covered'));
    header.classList.remove('covered');
  }
}

const paragraphs = document.querySelectorAll('p');
const headings1 = document.querySelectorAll('h1');
const headings3 = document.querySelectorAll('h3');
const links = document.querySelectorAll('a');
const hobbies = document.querySelectorAll('.hobby');
const skill = document.querySelectorAll('.skill');
const portfolio = document.querySelectorAll('.portfolio');
const header = document.querySelector('header');

checkbox.addEventListener('change', checkboxToggler);
