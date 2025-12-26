// Main JavaScript for Professor Adda

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initAnimations();
    
    // Add intersection observer for scroll animations
    initScrollAnimations();
    
    // Initialize feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});

function initAnimations() {

    // Add fade-in animation to elements on load
    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// WhatsApp integration
function openWhatsApp() {
    const phoneNumber = "7690022111"; // Primary WhatsApp number
    const message = "Hello Professor Adda! I'm interested in NET JRF notes. Please provide more information about the courses and pricing.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Sample PDF download
function downloadSample() {
    // In production, this would trigger actual file download
    const downloadUrl = '/sample-notes.pdf'; // Replace with actual file path
    
    // Create temporary link for download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Professor-Adda-Sample-Notes.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading state to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        const originalText = this.innerHTML;
        this.innerHTML = '<i data-feather="loader" class="animate-spin"></i> Loading...';
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
        
        // Reset button text after 2 seconds (simulate loading)
        setTimeout(() => {
            this.innerHTML = originalText;
            if (typeof feather !== 'undefined') {
                feather.replace();
            }
        }, 2000);
    });
});