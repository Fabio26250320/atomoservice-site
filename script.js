const elements = document.querySelectorAll('.reveal, h1, h2, p, .cta-main');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
},{threshold:0.3});

elements.forEach(el => observer.observe(el));

/* PARALLAX VISION PRO */
window.addEventListener('scroll', () => {

    const scroll = window.scrollY;

    document.querySelectorAll('.layer').forEach((layer, i) => {
        layer.style.transform = `translateY(${scroll * (i * 0.05)}px)`;
    });

    const hero = document.querySelector('h1');
    if(hero){
        hero.style.transform = `scale(${1 + scroll / 3000})`;
    }

});
