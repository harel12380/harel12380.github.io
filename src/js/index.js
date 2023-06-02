const scrollContainer = document.getElementById('hobbies-list');
const scrollButtons = document.querySelectorAll('.scroll-button');
const hobbies = document.querySelectorAll('.hobby');
const hobbiesNavigators = document.querySelectorAll('.hobby-navigator');

const scrollAmount = scrollContainer.clientWidth;

scrollButtons.forEach((button) => {
  button.addEventListener('click', () => {
    let currIndex = parseInt(document.querySelector('.hobby-navigator.active').getAttribute('data-index'));
    
    if (button.classList.contains('left') && currIndex > 0) {
      scrollContainer.scrollBy(-scrollAmount, 0);
      activateCircleButton(currIndex - 1);
    } else if (button.classList.contains('right') && currIndex < hobbies.length - 1) {
      scrollContainer.scrollBy(scrollAmount, 0);
      activateCircleButton(currIndex + 1);
    }
  });
});


hobbiesNavigators.forEach((button) => {
  button.addEventListener('click', () => {
    const startIndex = parseInt(document.querySelector('.hobby-navigator.active').getAttribute('data-index'));
    const targetIndex = parseInt(button.getAttribute('data-index'));

    if (startIndex == targetIndex) return;

    for (let i = startIndex + (startIndex < targetIndex ? 1 : -1); startIndex < targetIndex ? (i <= targetIndex) : (i >= targetIndex); startIndex < targetIndex ? i++ : i--) {
      scrollContainer.scrollTo({
        left: hobbies[i].offsetLeft,
        behavior: 'smooth',
      });
      
      activateCircleButton(i);
    }

  });
});

function activateCircleButton(index) {
  hobbiesNavigators.forEach((button) => {
    button.classList.remove('active');
  });

  hobbiesNavigators[index].classList.add('active');
}