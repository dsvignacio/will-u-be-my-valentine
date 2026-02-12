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
  
  $('div.card-face').on('click', function() {
    $('div.card-container').toggleClass('close');
    $('body').toggleClass('close');
  })

  $('#imgContainer-yes').hover(
    function() {
      const randomIndex = Math.floor(Math.random() * imageListHappy.length);
      $('#img-popup-happy').attr('src', imageListHappy[randomIndex]);
    },
    function() {

    }
  )

  $('#imgContainer-no').hover(
    function() {
      const randomIndex = Math.floor(Math.random() * imageListSad.length);
      $('#img-popup-sad').attr('src', imageListSad[randomIndex]);
    },
    function() {

    }
  )
})