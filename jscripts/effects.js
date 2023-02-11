$('.dog-container').hover(function(e) {
  $('img', this).toggleClass('dog-container-effect');
  $( this ).toggleClass('dog-container-border');
});

let total = 0;

function adoptFees(x) {
  total += x;
  $('#total').text('$ ' + Number(total));
}
