var images = [
  'url("none")',
  'url("https://i.imgur.com/25qbHoC.png")',
  'url("https://i.imgur.com/9pcneSb.png")',
  'url("https://i.imgur.com/Vfxu8ap.png")'
]
  
$('.xfield').click(function() {
  var x = $(this).data("counter") || 1;
  $(this).css('background-image', images[x%4]);
  $(this).data('counter', x+1);
});