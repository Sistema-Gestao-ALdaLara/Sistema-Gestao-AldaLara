
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.querySelector('.sidebar');
const sidebarTextElements = document.querySelectorAll('.sidebar-text');
const body = document.querySelector('body');

/*Script para o sidbar*/
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    sidebarTextElements.forEach(el => el.classList.toggle('d-none'));

    if (sidebar.classList.contains('collapsed')) {
        body.style.gridTemplateColumns = '70px 1fr';
    } else {
        body.style.gridTemplateColumns = '210px 1fr';
    }

});

/** script para o loader */
document.addEventListener("DOMContentLoaded", function () {
    let loader = document.getElementById("loader");
    
    if (loader) { // Verifica se o loader existe
        setTimeout(() => { 
            loader.remove();
        }, 4000);
    }
});

document.addEventListener("DOMContentLoaded", function () {
let links = document.querySelectorAll(".nav-link"); // Seleciona todos os links do sidebar
let currentPage = window.location.pathname.split("/").pop(); // Obtém a página atual

//script para a pagina actual do sidevar
links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active"); // Adiciona a classe active no link correspondente
    }
});
});
