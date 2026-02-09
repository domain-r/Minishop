let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(id=1){
  cart.push(id);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Masuk keranjang');
}
