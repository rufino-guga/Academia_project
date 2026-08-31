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
            window.open("https://totalpass.com/br/academias/a-fit-academia-9e245ea4-42de-45fd-93e6-fa1d454e5cb3/", "_blank");
        });
    }

    /* ==========================================
       2. WELLHUB (Abre em nova aba)
    ========================================== */
    if (Well) {
        Well.addEventListener("click", function (e) {
            e.preventDefault();
            window.open("https://wellhub.com/pt-br/search/partners/afit-academia-jardim-morumbi/", "_blank");
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
            window.location.href = "https://www.instagram.com/afit.academia01/";
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
