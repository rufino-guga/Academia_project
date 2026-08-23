document.addEventListener("DOMContentLoaded", function () {
    const Total = document.querySelector(".btn-total");
    const Well = document.querySelector(".btn-well");
    const Ad = document.querySelector(".Adquira"); // Corrigido de # para .
    const btn = document.querySelector("#btnInsta");

    if (Total) {
        Total.addEventListener("click", function () {
            window.open("https://totalpass.com/br/academias/academia-tyson-gym/");
        });
    }

    if (Well) {
        Well.addEventListener("click", function () {
            window.open("https://wellhub.com/pt-br/search/partners/academia-tyson-gym-jardim-do-cedro/");
        });
    }

    if (Ad) {
        Ad.addEventListener("click", function () {
            window.open("https://wa.me/5511975709591?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20planos!");
        });
    }
}); 
        /* ==========================================
           MENU MOBILE
        ========================================== */

        const menuButton =
            document.getElementById("mobileMenuButton");

        const mobileMenu =
            document.getElementById("mobileMenu");


        menuButton.addEventListener("click", function () {

            menuButton.classList.toggle("active");

            mobileMenu.classList.toggle("active");


            const aberto =
                menuButton.classList.contains("active");


            menuButton.setAttribute(
                "aria-expanded",
                aberto
            );
        });
        /* ==========================================
           FECHAR MENU AO CLICAR EM UMA OPÇÃO
        ========================================== */

        const mobileLinks =
            mobileMenu.querySelectorAll("a");


        mobileLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                menuButton.classList.remove("active");

                mobileMenu.classList.remove("active");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );
            });
        });
        /* ==========================================
           INSTAGRAM
        ========================================== */

        const btnInstagram =
            document.querySelector("#btnInsta");


        btnInstagram.addEventListener("click", function () {

            window.open(
                "https://www.instagram.com/academiatysongym/"
            );

        });
        /* ==========================================
           WHATSAPP
        ========================================== */
        function abrirWhatsApp() {

            window.open(
                "https://wa.me/5511975709591?text=Olá,%20curti%20um%20site%20que%20você%20criou,%20Vamos%20fazer%20um%20orçamento!"
            );

        }
