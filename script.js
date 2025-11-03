// Simple Scroll Animations
document.addEventListener('DOMContentLoaded', function() {
    
    // Add visible class to header immediately
    const headerContent = document.querySelector('.header-content');
    headerContent.classList.add('visible');
    
    // Navigation functionality
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle mobile menu
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Function to handle scroll animations
    function handleScrollAnimations() {
        const elements = document.querySelectorAll('.section-title, .about-content, .skills-container, .education-table, .contact-info');
        
        elements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            }
        });
        
        // Timeline items
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            if (isInViewport(item)) {
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 200);
            }
        });
        
        // Project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            if (isInViewport(card)) {
                setTimeout(() => {
                    card.classList.add('visible');
                }, index * 150);
            }
        });
        
        // Skill items
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach((item, index) => {
            if (isInViewport(item)) {
                setTimeout(() => {
                    item.classList.add('visible');
                    // Animate skill bars
                    const skillLevel = item.querySelector('.skill-level');
                    if (skillLevel) {
                        const width = skillLevel.style.width;
                        skillLevel.style.setProperty('--target-width', width);
                    }
                }, index * 100);
            }
        });
    }
    
    // Initial check
    handleScrollAnimations();
    
    // Check on scroll
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    console.log('Portfolio loaded successfully!');
});