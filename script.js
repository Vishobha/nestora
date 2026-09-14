const searchBox = document.getElementById("searchBox");
const productCards = document.querySelectorAll(".product-card");
const categoryButtons = document.querySelectorAll(".category-btn");

let selectedCategory = "all";

function showProducts() {
    const searchText = searchBox.value.toLowerCase();

    productCards.forEach(function (card) {
        const productName = card.querySelector("h3").textContent.toLowerCase();
        const productCategory = card.dataset.category;

        const matchesSearch = productName.includes(searchText);
        const matchesCategory =
            selectedCategory === "all" ||
            productCategory === selectedCategory;

        if (matchesSearch && matchesCategory) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

searchBox.addEventListener("input", showProducts);

categoryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        selectedCategory = button.dataset.category;
        showProducts();
    });
});