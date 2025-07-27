// Corporate interface interactions
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.control-btn');
    const playButton = document.querySelector('.control-btn.primary');
    let isPlaying = false;

    // Button hover effect
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    });

    // Play button toggle
    playButton.addEventListener('click', () => {
        isPlaying = !isPlaying;
        playButton.textContent = isPlaying ? 'Pause' : 'Play';
        
        // Add ripple effect
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        playButton.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade in elements on scroll
    function fadeInOnScroll() {
        const elements = document.querySelectorAll('.main-content, .footer');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = '1';
            }
        });
    }

    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll();
}); 