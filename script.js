jQuery(document).ready(function(){
  $('div.card-clickable').on('click', function(){
    $(this).toggleClass('open');
    $('body').toggleClass('open');
  })
})