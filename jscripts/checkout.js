$('#checkout-form').submit(function( event) {
  if ($('#name').val(),$('#email').val(),$('#street').val(),$('#city').val() == "") {
    alert("Please fill out all the information.")
  }
  else {
  event.preventDefault();
  alert("Thank you. The form information has been received.")
  console.log("Name: " + $('#name').val());
  console.log("Email: " + $('#email').val());
  console.log("Street: " + $('#street').val());
  console.log("City: " + $('#city').val());
  console.log("State: " + $('#state').val());
  console.log("adoptBefore? " + $('#adopt-before').prop( 'checked'));
  console.log("Repeat customer? " + $('#adopt-before-no').prop( 'checked'));
  console.log("Pickup location: " + $('#pickup').val());
  }
});
