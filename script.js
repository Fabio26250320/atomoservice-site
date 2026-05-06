const elements = document.querySelectorAll('.reveal, .card, .hero h1, .hero p, .cta-main, .subtext');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
},{threshold:0.2});

elements.forEach(el => observer.observe(el));
