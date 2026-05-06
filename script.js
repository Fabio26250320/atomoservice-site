const elements = document.querySelectorAll('.reveal, h2, h1, p, .card, .cta-main');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
},{threshold:0.15});

elements.forEach(el => observer.observe(el));

/* PARALLAX LEVE (EFEITO APPLE) */
document.addEventListener('mousemove', (e) => {
    const light = document.querySelector('.cinematic-light');
    light.style.transform = `translate(${e.clientX/25}px, ${e.clientY/25}px)`;
});
