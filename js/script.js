document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        const overlay = card.querySelector(".overlay");

        card.addEventListener("mouseenter", function () {
            overlay.style.opacity = 1;
        });

        card.addEventListener("mouseleave", function () {
            overlay.style.opacity = 0;
        });
    });
});
