const products = [
  {id:1, name:'Produk A', price:50000, image:''},
  {id:2, name:'Produk B', price:75000, image:''}
];

const wrap = document.getElementById('products');
if (wrap) {
  products.forEach(p => {
    wrap.innerHTML += `<div class="product">
      <h3>${p.name}</h3>
      <p>Rp ${p.price}</p>
      <a href="product.html?id=${p.id}">Lihat</a>
    </div>`;
  });
}
