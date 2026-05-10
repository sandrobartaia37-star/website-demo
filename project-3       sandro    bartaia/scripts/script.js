window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "0.5s";

    setTimeout(() => {
      loader.style.display = "none";
      content.style.display = "block";
    }, 500);

  }, 1000); 
});
 
 
 
 

let cart = [];

document.addEventListener('DOMContentLoaded', function () {

    const addToCartButtons = document.querySelectorAll('.btn-primary');
    const cartMenu = document.querySelector('.cart');

    // თავიდან
    cartMenu.innerHTML = `
    <i class="fa-solid fa-cart-shopping"></i>
    <span  style="margin-top: 2.3rem; margin-left: 1.3rem;"  class="cart-count">${cart.length}</span>
    `;

    addToCartButtons.forEach(button => {

        button.addEventListener('click', function (event) {

            event.preventDefault();

            const productName = this.getAttribute('data-product-name');
            const productPrice = this.getAttribute('data-product-price');

            cart.push({
                name: productName,
                price: productPrice,
            });

            alert(`Added to cart: ${productName} - $${productPrice}`);

            // რიცხვის განახლება
            cartMenu.innerHTML = `
            <i class="fa-solid fa-cart-shopping"></i>
            <span  style="margin-top: 2.3rem; margin-left: 1.3rem;"  class="cart-count">${cart.length}</span>
            `;

        });

    });

});