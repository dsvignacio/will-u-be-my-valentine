const cardFront = document.querySelector('.card-movable');

function triggerAnimation() {
  // Add the class to start the animation
  cardFront.classList.add('card-open-animation');

  // Remove the class after the animation ends so it can run again on the next click
  // cardFront.addEventListener('animationend', () => {
  //   cardFront.classList.remove('card-open-animation');
  // }, { once: true }); // The { once: true } option ensures the event listener runs only once
}

// Add click event listener to the button
cardFront.addEventListener('click', triggerAnimation);