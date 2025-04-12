
let cart = [];


function addToCart(product) {
    cart.push(product);
    console.log(`${product.name} has been added to your cart.`);
    updateCartCount();
}


function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cart.length; 
}

function showCart() {
    const cartModal = document.getElementById('cart-modal');
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';

    cart.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item.name; 
        cartItemsElement.appendChild(li);
    });

    cartModal.style.display = 'block';
}

function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'none'; 
}
const products = [
     { name: 'Product 1' },
    { name: 'Product 2' }
];

    {
        name: 'Cortez',
        detailsPage: 'item_details.html',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a8dec33-c0a3-4540-8c99-fc57f298a9b0/NIKE+CORTEZ.png'
    },
    {
        name: 'Killshot',
        detailsPage: 'killshot.html',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4e0f6d2a-62c3-47c0-8272-57bde95ca6c8/KILLSHOT+2+LEATHER.png'
    },
    {
        name: 'Nike Vomero Lifestyle Shoes',
        detailsPage: 'nike_vomero.html',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0c1e5173-ecc6-4358-aafe-526ca0b12a16/W+NIKE+ZOOM+VOMERO+5.png'
    }
];


document.querySelectorAll('.atb-btn').forEach((button, index) => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); 
        const product = products[index]; 
        addToCart(product); 
        
        window.location.href = product.detailsPage;
    });
});

document.getElementById('cart-icon').addEventListener('click', showCart);

document.getElementById('close-modal').addEventListener('click', closeCart);
