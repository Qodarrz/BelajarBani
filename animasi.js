document.addEventListener("DOMContentLoaded", () => {
    // 1. "Days Spent Together" Counter
    // Set your relationship start date here (Year, Month (0-indexed), Day)
    // For example, August 12, 2024
    const startDate = new Date(2024, 7, 12); 
    const currentDate = new Date();
    
    // Calculate difference in milliseconds
    const diffTime = Math.abs(currentDate - startDate);
    // Convert to days
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    
    const counterElement = document.getElementById("days-counter");
    
    // Animate the counter
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = diffDays / (duration / 16); // 60fps
    
    const updateCounter = () => {
        start += increment;
        if (start < diffDays) {
            counterElement.innerText = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            counterElement.innerText = diffDays;
        }
    };
    
    updateCounter();

    // 2. Scroll Reveal Animation (Fade In)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});
