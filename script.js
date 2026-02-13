const imageListHappy = [
  './assets/imgs/happy/dudu-happy-dancing-1.gif',
  './assets/imgs/happy/dudu-happy-dancing-2.gif',
  './assets/imgs/happy/dudu-happy-drums.gif',
  './assets/imgs/happy/dudu-happy-sweater.gif',
];

const imageListSad = [
  './assets/imgs/sad/dudu-sad-bed.gif',
  './assets/imgs/sad/dudu-sad-heartbroken.gif',
  './assets/imgs/sad/dudu-sad-phone.gif',
  './assets/imgs/sad/dudu-sad-table.gif',
];

jQuery(document).ready(function() {

  const randomIndexHappy = Math.floor(Math.random() * imageListHappy.length);
  $('#img-popup-happy').attr('src', imageListHappy[randomIndexHappy]);
  const randomIndexSad = Math.floor(Math.random() * imageListSad.length);
  $('#img-popup-sad').attr('src', imageListSad[randomIndexSad]);

  $('div.card-face').on('click', function() {
    $('div.card-container').toggleClass('open');
    $('body').toggleClass('open');

    if ($('div.card-container').hasClass('open')) {
      // Function to run if the class is present
      cardOpen();
    } else {
      // Function to run if the class is absent (the 'false' state)
      cardClosed();
    }
  })

  function cardOpen() {
    $('#imgContainer-yes').on('click',
      function() {
        // Happy Dudu
        const randomIndex = Math.floor(Math.random() * imageListHappy.length);
        $('#img-popup-happy').attr('src', imageListHappy[randomIndex]);
        $('#img-popup-happy').css('display', 'block');
        $('#img-popup-sad').css('display', 'none');

        // Change header
        $('span.title').text('YEEEEEEY!!!');

        // Confetti
        confettiYesCenter();
      }
    )

    $('#imgContainer-no').on('click',
      function() {
        // Sad Dudu
        const randomIndex = Math.floor(Math.random() * imageListSad.length);
        $('#img-popup-sad').attr('src', imageListSad[randomIndex]);
        $('#img-popup-happy').css('display', 'none');
        $('#img-popup-sad').css('display', 'block');

        // Change header
        $('span.title').text('😭😭😭😭😭');
      }
    )
  }
  
  // RESET ALL
  function cardClosed() {
    $('span.title').text('Happy Valentine\'s Day!');
    $('#img-popup-happy').css('display', 'none');
    $('#img-popup-sad').css('display', 'none');
  }
})

function confettiYesCenter() {
  const defaults = {
  spread: 360,
  ticks: 100,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ["heart"],
  colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 50,
    scalar: 2,
  });
  
  confetti({
    ...defaults,
    particleCount: 25,
    scalar: 3,
  });
  
  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 4,
  });
}

setTimeout(shoot, 0);
setTimeout(shoot, 300);
setTimeout(shoot, 600);
}