// Shared interactions for the V-CIM 2027 static site.
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const rightMenuToggle = document.querySelector('.rightmenu-toggle');
    const rightMenu = document.querySelector('.rightmenu');
    const topBtn = document.getElementById('topBtn');
    const slides = Array.from(document.querySelectorAll('#rslides li'));

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function () {
            navList.classList.toggle('show');
            menuToggle.setAttribute('aria-expanded', navList.classList.contains('show'));
        });
    }

    if (rightMenuToggle && rightMenu) {
        rightMenuToggle.addEventListener('click', function () {
            rightMenu.classList.toggle('show');
        });
    }

    if (topBtn) {
        window.addEventListener('scroll', function () {
            topBtn.style.display = window.scrollY > 300 ? 'inline-flex' : 'none';
        }, { passive: true });

        topBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    if (slides.length > 1) {
        let activeSlide = 0;
        slides.forEach(function (slide, index) {
            slide.style.display = index === 0 ? 'block' : 'none';
        });

        window.setInterval(function () {
            slides[activeSlide].style.display = 'none';
            activeSlide = (activeSlide + 1) % slides.length;
            slides[activeSlide].style.display = 'block';
        }, 5000);
    }
});
