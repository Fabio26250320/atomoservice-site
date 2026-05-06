const elements = document.querySelectorAll('h1, h2, p, .cta-main');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
},{threshold:0.4});

elements.forEach(el => observer.observe(el));

/* EFEITO APPLE: zoom suave no scroll */
window.addEventListener('scroll', () => {
    const hero = document.querySelector('h1');
    let scale = 1 + window.scrollY / 2000;
    hero.style.transform = `scale(${Math.max(1, 1.2 - scale * 0.2)})`;
});
