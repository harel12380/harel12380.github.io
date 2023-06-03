const list = document.getElementById('hobbies-list');
const items = document.querySelectorAll('.hobby');
const hobbiesNavigators = document.querySelectorAll('.hobby-navigator');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

var currentIndex = 0;
scrollToIndex(currentIndex);

function scrollList(direction) {
  const itemWidth = items[0].offsetWidth;
  const containerWidth = list.offsetWidth;
  const maxScroll = items.length * itemWidth - containerWidth;

  if (direction === 'left') {
    currentIndex = Math.max(currentIndex - 1, 0);
  } else {
    currentIndex = Math.min(currentIndex + 1, items.length - 1);
  }

  list.scrollTo({behavior: "smooth", left: currentIndex * itemWidth});

  updateNavigation();
}

function scrollToIndex(index) {
  currentIndex = index;
  const itemWidth = items[0].offsetWidth;

  list.scrollTo({behavior: "smooth", left: currentIndex * itemWidth});

  updateNavigation();
}

function updateNavigation() {
  hobbiesNavigators.forEach((hobbiesNavigator, index) => {
    if (index === currentIndex) {
      hobbiesNavigator.classList.add('active');
    } else {
      hobbiesNavigator.classList.remove('active');
    }
  });

  leftArrow.classList.toggle('disabled', currentIndex === 0);
  rightArrow.classList.toggle('disabled', currentIndex === items.length - 1);
}
