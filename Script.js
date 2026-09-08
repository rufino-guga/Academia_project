document.addEventListener("DOMContentLoaded", function () {
    // Seleção dos elementos
    const Total = document.querySelector(".btn-total");
    const Well = document.querySelector(".btn-well");
    const Ad = document.querySelector(".Adquira");
    const btnInstagram = document.querySelector("#btnInsta");
    const nameInput = document.querySelector("#name");
    const planoSelect = document.querySelector("#matricula");

    /* ==========================================
       1. TOTALPASS (Abre em nova aba)
    ========================================== */
    if (Total) {
        Total.addEventListener("click", function (e) {
            e.preventDefault();
            window.open("https://totalpass.com/br", "_blank");
        });
    }

    /* ==========================================
       2. WELLHUB (Abre em nova aba)
    ========================================== */
    if (Well) {
        Well.addEventListener("click", function (e) {
            e.preventDefault();
            window.open("https://wellhub.com/pt-br", "_blank");
        });
    }

    /* ==========================================
       3. ADQUIRA / WHATSAPP (Mensagem personalizada)
    ========================================== */
    if (Ad) {
        Ad.addEventListener("click", function (e) {
            e.preventDefault();

            let mensagem = "Olá, gostaria de saber mais sobre os planos!";

            // Se os campos existirem na página, monta mensagem personalizada
            if (nameInput && planoSelect) {
                const nome = nameInput.value.trim();
                const plano = planoSelect.value;

                if (nome !== "" && plano !== "") {
                    mensagem = `Olá, meu nome é ${nome}, quero me matricular no plano ${plano}. Quero começar a evoluir!`;
                } else {
                    alert("Por favor, preencha seu nome e escolha um plano.");
                    return;
                }
            }

            window.location.href = `https://wa.me/5511975709591?text=${encodeURIComponent(mensagem)}`;
        });
    }

    /* ==========================================
       4. INSTAGRAM (Abre o app direto sem about:blank)
    ========================================== */
    if (btnInstagram) {
        btnInstagram.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = "https://www.instagram.com/guh_ab_/";
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
