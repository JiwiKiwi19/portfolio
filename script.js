

document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.style.display = targetSection.style.display === 'block' ? 'none' : 'block';
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

document.querySelectorAll('.section-box').forEach(box => {
    box.addEventListener('click', () => {
        const sectionToToggle = document.querySelector(box.querySelector('a').getAttribute('href'));
        sectionToToggle.style.display = sectionToToggle.style.display === 'block' ? 'none' : 'block';
        sectionToToggle.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

window.addEventListener('scroll', () => {
    document.querySelectorAll('.hidden-section').forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (sectionPosition < screenPosition) {
            section.classList.add('visible');
            section.querySelectorAll('span').forEach((element, index) => {
                element.style.animationDelay = `${index * 0.1}s`; 
            });
        }
    });
});

