document.addEventListener("DOMContentLoaded", function () {
    const Total = document.querySelector(".btn-total");
    const Well = document.querySelector(".btn-well");
    const Ad = document.querySelector(".Adquira"); // Corrigido de # para .

    if (Total) {
        Total.addEventListener("click", function () {
            window.open("https://totalpass.com/br/academias/academia-tyson-gym/", "_blank");
        });
    }

    if (Well) {
        Well.addEventListener("click", function () {
            window.open("https://wellhub.com/pt-br/search/partners/academia-tyson-gym-jardim-do-cedro/", "_blank");
        });
    }

    if (Ad) {
        Ad.addEventListener("click", function () {
            window.open("https://wa.me/5511975709591?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20planos!", "_blank");
        });
    }
});