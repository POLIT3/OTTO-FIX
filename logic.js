// WhatsApp contact number
const WHATSAPP_NUMBER = '254721120775';

// Function to open WhatsApp with a message
function openWhatsApp(message = '') {
    let url = 'https://wa.me/' + WHATSAPP_NUMBER;
    
    if (message) {
        // Encode the message for URL
        const encodedMessage = encodeURIComponent(message);
        url += '?text=' + encodedMessage;
    } else {
        // Default message
        const defaultMessage = encodeURIComponent('Hi OTTO FIX, I would like to inquire about your services.');
        url += '?text=' + defaultMessage;
    }
    
    // Open WhatsApp in a new window
    window.open(url, '_blank');
}

// Function to scroll to contact section
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add event listeners when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe service cards
    document.querySelectorAll('#d3, #d4, #d5').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Mobile menu optimization
if (window.innerWidth <= 768) {
    document.querySelectorAll('.navitems button').forEach(btn => {
        btn.style.fontSize = '12px';
        btn.style.padding = '8px 12px';
    });
}
