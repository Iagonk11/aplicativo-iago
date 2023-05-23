document.addEventListener('DOMContentLoaded', function() {
    var addToCartButtons = document.getElementsByClassName('add-to-cart-btn');
    var cartItemsElement = document.getElementById('cart-items');
    var cartTotalElement = document.getElementById('cart-total');
    var clearCartButton = document.getElementById('clear-cart-btn');
    var checkoutButton = document.getElementById('checkout-btn');
  
    var cartItems = [];
    var cartTotal = 0;
  
    // Add event listeners to all "Add to Cart" buttons
    for (var i = 0; i < addToCartButtons.length; i++) {
      addToCartButtons[i].addEventListener('click', function() {
        var name = this.getAttribute('data-name');
        var price = parseFloat(this.getAttribute('data-price'));
        var item = { name: name, price: price };
  
        cartItems.push(item);
        cartTotal += price;
  
        var cartItemElement = document.createElement('li');
        cartItemElement.textContent = name + ' - $' + price.toFixed(2);
        cartItemsElement.appendChild(cartItemElement);
  
        cartTotalElement.textContent = '$' + cartTotal.toFixed(2);
      });
    }
  
    // Clear cart button event listener
    clearCartButton.addEventListener('click'