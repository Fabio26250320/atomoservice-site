const elements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
},{threshold:0.15});

elements.forEach(el => observer.observe(el));

// movimento suave do glow com mouse (efeito premium)
document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.bg-glow');
    if(glow){
        glow.style.transform = `translate(${e.clientX/20}px, ${e.clientY/20}px)`;
    }
});
