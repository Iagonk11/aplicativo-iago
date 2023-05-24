document.getElementById('payment-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve form values
  var cardNumber = document.getElementById('card-number').value;
  var expirationDate = document.getElementById('expiration-date').value;
  var cvv = document.getElementById('cvv').value;
  var nameOnCard = document.getElementById('name-on-card').value;

  // Perform form validation (you can add your own validation logic here)
  if (cardNumber === '' || expirationDate === '' || cvv === '' || nameOnCard === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Perform payment processing (you can add your own logic here)
  // You can send the payment data to a server-side script using AJAX

  // Display success message
  alert('Payment successful!');
});