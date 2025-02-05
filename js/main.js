// 3D Parallax Effect
function handleMouseMove(event) {
    const cards = document.querySelectorAll('.feature-card');
    const hero = document.querySelector('.hero-content');
    const chartContainer = document.querySelector('.chart-container');

    // Calculate mouse position relative to center of screen
    const mouseX = event.clientX / window.innerWidth - 0.5;
    const mouseY = event.clientY / window.innerHeight - 0.5;

    // Hero parallax effect
    if (hero) {
        hero.style.transform = `
            translateZ(50px)
            rotateX(${mouseY * -10}deg)
            rotateY(${mouseX * 10}deg)
        `;
    }

    // Feature cards parallax effect
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardX = (rect.left + rect.width / 2) / window.innerWidth - 0.5;
        const cardY = (rect.top + rect.height / 2) / window.innerHeight - 0.5;

        const intensity = 15;
        card.style.transform = `
            perspective(1000px)
            rotateX(${(mouseY - cardY) * intensity}deg)
            rotateY(${(mouseX - cardX) * intensity}deg)
            translateZ(10px)
        `;
    });

    // Chart container parallax effect
    if (chartContainer) {
        chartContainer.style.transform = `
            translateZ(30px)
            rotateX(${mouseY * -5}deg)
            rotateY(${mouseX * 5}deg)
        `;
    }
}

// Smooth scrolling with 3D effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll with 3D effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.scrollY > 50;
    
    if (scrolled) {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        navbar.style.transform = 'translateZ(5px)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.8)';
        navbar.style.transform = 'translateZ(0)';
    }
});

// Add 3D floating elements
function createFloatingElements() {
    const container = document.body;
    const numElements = 10;

    for (let i = 0; i < numElements; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        element.style.width = `${Math.random() * 100 + 50}px`;
        element.style.height = `${Math.random() * 100 + 50}px`;
        element.style.background = `linear-gradient(45deg, var(--primary-color), transparent)`;
        element.style.borderRadius = '50%';
        element.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(element);
    }
}

// Animate stats numbers
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseFloat(stat.getAttribute('data-target'));
        const duration = 2000; // Animation duration in milliseconds
        const start = 0;
        const increment = target / (duration / 16); // 60fps

        let current = start;
        const animate = () => {
            current += increment;
            if (current < target) {
                stat.textContent = current.toFixed(3);
                requestAnimationFrame(animate);
            } else {
                stat.textContent = target;
            }
        };

        animate();
    });
}

// Add animation to feature cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateZ(20px) rotateX(0) rotateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateZ(-100px) rotateX(10deg) rotateY(-10deg)';
    card.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
    observer.observe(card);
});

// Initialize all effects
function initializeEffects() {
    // Add mouse move listener for parallax effects
    document.addEventListener('mousemove', handleMouseMove);
    
    // Create floating background elements
    createFloatingElements();
    
    // Animate stats
    animateStats();

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
}

// Call initialization when the page loads
window.addEventListener('load', initializeEffects);

// Add resize handler for responsive adjustments
window.addEventListener('resize', () => {
    // Reset transformations on resize
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.transform = 'translateZ(0) rotateX(0) rotateY(0)';
    });
});
