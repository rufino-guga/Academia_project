document.addEventListener("DOMContentLoaded", function () {
    const Total = document.querySelector(".btn-total");
    const Well = document.querySelector(".btn-well");
    const Ad = document.querySelector(".Adquira"); // Corrigido de # para .
    const btn = document.querySelector("#btnInsta");

    if (Total) {
        Total.addEventListener("click", function () {
            window.open("https://totalpass.com/br/academias/tk-academia/");
        });
    }

    if (Well) {
        Well.addEventListener("click", function () {
            window.open("https://wellhub.com/pt-br/search/partners/tk-academia-braganca-paulista/?utm_content=Consideration_Text_Keywords_Wellhub-Gyms&gad_source=1&gclid=Cj0KCQjwhsrUBhDxARIsAN3AQSf42tGxWswA0_pSW7dkENGCWfA0VC46eAN3Obce2Rizfbf8ONLYV40aAvb2EALw_wcB&utm_medium=paid&utm_campaign=latam-br_b2c_google-search-brand-partners-wellhub_con_ongoing_all_signup_0326&utm_source=google&utm_term=paid-academias%20com%20wellhub");
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
                "https://www.instagram.com/tk_academia_dit/"
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
