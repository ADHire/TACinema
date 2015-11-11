function showForm(seat) {
  var button = document.getElementById('change');
  var onclick = button.getAttribute('onclick');
  var onclick = button.setAttribute('onclick', 'updateSeat(' + "'" + seat + "'" + ')');
}



$('form').hide();
$('.shrink').on('click', function(){
  $('form').slideToggle("150");
});

//Above=get elements to change ... Below=changes from green to red




function updateSeat(seato) {
  var img = document.getElementById(seato);
  var src = img.getAttribute('src');
  var src = img.setAttribute('src', 'images/redsquare.png');
}
