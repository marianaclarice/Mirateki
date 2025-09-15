// Script para funcionalidades básicas do site
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar classe ativa ao item de menu correspondente à página atual
    const currentPage = window.location.pathname.split('/').pop();
    const menuLinks = document.querySelectorAll('nav a');

    menuLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('ativo');
        } else {
            link.classList.remove('ativo');
        }
    });

    // Simular adição de produtos ao carrinho
    const addToCartButtons = document.querySelectorAll('.btn-carrinho');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Produto adicionado ao carrinho!');
        });
    });

    // Validação simples do formulário de newsletter
    const newsletterForm = document.querySelector('.newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value && isValidEmail(emailInput.value)) {
                alert('Obrigado por assinar nossa newsletter!');
                emailInput.value = '';
            } else {
                alert('Por favor, insira um e-mail válido.');
            }
        });
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

function initBannerSlider() {
    const slides = [
        "img/4b3fbea55afcc605f3cc19d2742b7ad6.jpg",
        "img/b5a10ea3fd32f84aea67c63d8cca208a (1).jpg",
        "img/84b2087cad9f60f55a991d36ebd51250.jpg"
    ];

    let currentIndex = 0;
    const banner = document.querySelector(".banner");
    const dotsContainer = document.querySelector(".dots");

    slides.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => {
            currentIndex = i;
            showSlide(currentIndex);
            resetInterval();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll(".dot");

    function showSlide(index) {
        banner.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${slides[index]}')`;
        banner.style.backgroundSize = "cover";
        banner.style.backgroundPosition = "center";

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(nextSlide, 5000);
    }

    // Troca automática
    let interval = setInterval(nextSlide, 5000);

    // Inicializa
    showSlide(currentIndex);
}

document.addEventListener("DOMContentLoaded", initBannerSlider);