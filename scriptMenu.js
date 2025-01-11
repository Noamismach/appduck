const duckCards = document.querySelectorAll(".duck-card");
let clickCount = 0;
duckCards.forEach(card => {
    card.addEventListener("click", () => {
        const price = card.getAttribute("data-price");
        const paypalLink = `https://paypal.me/NoamIsmachMosh/${price}?country.x=IL&locale.x=he_IL`;
        window.open(paypalLink, '_blank');
    });
}); // payment

const logo = document.getElementById("logo");
logo.addEventListener("click", () => {
    clickCount++;
    if (clickCount === 7) {
        window.open("https://youtu.be/xvFZjo5PgG0?si=mpydPAtyNGWGYs4O", "_blank");
        clickCount = 0; 
    }
});
// ester egg