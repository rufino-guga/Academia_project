document.addEventListener("DOMContentLoaded", function () {
    // Seleção dos elementos
    const Total = document.querySelector(".btn-total");
    const Well = document.querySelector(".btn-well");
    const Ad = document.querySelector(".Adquira");
    const btnInstagram = document.querySelector("#btnInsta");

    /* ==========================================
       1. TOTALPASS (Abre em nova aba)
    ========================================== */
    if (Total) {
        Total.addEventListener("click", function (e) {
            e.preventDefault();
            window.open("https://totalpass.com/br/academias/tk-academia/", "_blank");
        });
    }

    /* ==========================================
       2. WELLHUB (Abre em nova aba)
    ========================================== */
    if (Well) {
        Well.addEventListener("click", function (e) {
            e.preventDefault();
            window.open("https://wellhub.com/pt-br/search/partners/tk-academia-braganca-paulista/?utm_content=Consideration_Text_Keywords_Wellhub-Gyms&gad_source=1&gclid=Cj0KCQjwhsrUBhDxARIsAN3AQSf42tGxWswA0_pSW7dkENGCWfA0VC46eAN3Obce2Rizfbf8ONLYV40aAvb2EALw_wcB&utm_medium=paid&utm_campaign=latam-br_b2c_google-search-brand-partners-wellhub_con_ongoing_all_signup_0326&utm_source=google&utm_term=paid-academias%20com%20wellhub", "_blank");
        });
    }

    /* ==========================================
       3. ADQUIRA / WHATSAPP (Abre o app direto sem about:blank)
    ========================================== */
    if (Ad) {
        Ad.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = "https://wa.me/5511975709591?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20planos!";
        });
    }

    /* ==========================================
       4. INSTAGRAM (Abre o app direto sem about:blank)
    ========================================== */
    if (btnInstagram) {
        btnInstagram.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = "https://www.instagram.com/tk_academia_dit/";
        });
    }

    /* ==========================================
       5. MENU MOBILE
    ========================================== */
    const menuButton = document.getElementById("mobileMenuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuButton && mobileMenu) {
        menuButton.addEventListener("click", function () {
            menuButton.classList.toggle("active");
            mobileMenu.classList.toggle("active");

            const aberto = menuButton.classList.contains("active");
            menuButton.setAttribute("aria-expanded", aberto);
        });

        /* Fechar menu ao clicar em um item */
        const mobileLinks = mobileMenu.querySelectorAll("a");
        mobileLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                menuButton.classList.remove("active");
                mobileMenu.classList.remove("active");
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }
});

/* ==========================================
   FUNÇÃO GLOBAL WHATSAPP (Caso use onclick no HTML)
========================================== */
function abrirWhatsApp() {
    window.location.href = "https://wa.me/5511975709591?text=Olá,%20curti%20um%20site%20que%20você%20criou,%20Vamos%20fazer%20um%20orçamento!";
}
