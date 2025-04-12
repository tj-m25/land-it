// Initialize an empty cart
let cart = [];

// Function to add a product to the cart
function addToCart(product) {
    cart.push(product);
    console.log(`${product.name} has been added to your cart.`);
    updateCartCount();
}

// Function to update the cart count display
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cart.length; // Update the cart count
}

// Product data (you can also fetch this from a server or database)
const products = [
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

// Add event listeners to "Add to Bag" buttons
document.querySelectorAll('.atb-btn').forEach((button, index) => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default button behavior
        const product = products[index]; // Get the corresponding product
        addToCart(product); // Add the product to the cart
        // Optionally, redirect to the product details page
        window.location.href = product.detailsPage;
    });
});
