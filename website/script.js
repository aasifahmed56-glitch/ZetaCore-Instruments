document.addEventListener('DOMContentLoaded', () => {
    // Sticky Header effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
            navbar.style.backgroundColor = 'rgba(4, 8, 16, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.backgroundColor = '#040810';
            navbar.style.backdropFilter = 'none';
        }
    });

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add staggered animation to category cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initial state for animation elements
    const animateElements = document.querySelectorAll('.category-card, .prod-card, .feat-item');
    animateElements.forEach((el, index) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = `all 0.5s ease ${index % 4 * 0.1}s`;
        observer.observe(el);
    });
});
