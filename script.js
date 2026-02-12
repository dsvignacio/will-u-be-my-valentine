jQuery(document).ready(function(){
  $('div.card-container').on('click', function(){
    $(this).toggleClass('close');
    $('body').toggleClass('close');
  })
})