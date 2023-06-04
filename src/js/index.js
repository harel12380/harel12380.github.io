var animationActive = false;
var image = document.getElementById('myImage');

function toggleAnimation() {
  if (animationActive) return;

  image.src = darkThemeToggle ? 'white-mode.gif' : 'dark-mode.gif';
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

function setColorScheme(scheme) {
  darkThemeToggle = scheme == 'dark';
}

function getPreferredColorScheme() {
  if (window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    } else {
      return 'light';
    }
  }
  return 'light';
}

function updateColorScheme() {
  setColorScheme(getPreferredColorScheme());
  updateStaticThemeImage();
}

function updateStaticThemeImage() {
  image.src = darkThemeToggle ? 'dark.png' : 'white.png';
}

if (window.matchMedia) {
  var colorSchemeQuery = window.matchMedia(
    '(prefers-color-scheme: dark)'
  );
  colorSchemeQuery.addEventListener('change', updateColorScheme);
}

updateColorScheme();