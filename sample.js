// JavaScript to handle "Add to Bag" button clicks
document.querySelectorAll('.atb-btn').forEach((button, index) => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default button behavior
        const productLinks = [
            'item_details.html', // Link for Cortez
            'killshot.html',     // Link for Killshot
            'nike_vomero.html'   // Link for Nike Vomero
        ];
        // Redirect to the corresponding product details page
        window.location.href = productLinks[index];
    });
});
