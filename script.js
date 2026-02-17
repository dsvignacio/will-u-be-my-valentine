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

let indexHappy = 0;
let indexSad = 0;

jQuery(document).ready(function() {

  $('#img-popup-happy').attr('src', imageListHappy[0]);
  $('#img-popup-sad').attr('src', imageListSad[0]);

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
        if (indexHappy >= imageListHappy.length) {
          indexHappy = 0;
        }
        $('#img-popup-happy').attr('src', imageListHappy[indexHappy]);
        $('#img-popup-happy').css('display', 'block');
        $('#img-popup-sad').css('display', 'none');

        // Change header
        $('span.title').text('YEEEEEEY!!!');

        // Confetti
        confettiYesCenter();

        // Increments
        indexHappy++;
      }
    )

    $('#imgContainer-no').on('click',
      function() {
        // Sad Dudu
        if (indexSad >= imageListSad.length) {
          indexSad = 0;
        }
        $('#img-popup-sad').attr('src', imageListSad[indexSad]);
        $('#img-popup-happy').css('display', 'none');
        $('#img-popup-sad').css('display', 'block');

        // Change header
        $('span.title').text('😭😭😭😭😭');

        // Increments
        indexSad++;
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