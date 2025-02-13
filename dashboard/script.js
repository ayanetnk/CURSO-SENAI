// script.js
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".sidebar nav ul li a");
    const sections = document.querySelectorAll(".content section");

    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);

            // Oculta todas as seções
            sections.forEach((section) => {
                section.classList.add("hidden");
            });

            // Mostra a seção correspondente
            document.getElementById(targetId).classList.remove("hidden");
        });
    });

    // Mostra a aba "Início" por padrão
    document.getElementById("inicio").classList.remove("hidden");
});