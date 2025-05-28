// Main JavaScript file

// Add active class to the current navigation item
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Get current page URL
    const currentLocation = window.location.href;
    
    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
        
        link.addEventListener('click', function() {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Email copy functionality
    const emailElement = document.getElementById('emailCopy');
    const emailText = 'shwethahari005@gmail.com';
    const copyIcon = document.getElementById('copyIcon');
    const copyStatus = document.getElementById('copyStatus');
    
    if (emailElement) {
        emailElement.addEventListener('click', function() {
            navigator.clipboard.writeText(emailText)
                .then(() => {
                    copyIcon.style.display = 'none';
                    copyStatus.textContent = 'Copied!';
                    copyStatus.style.display = 'inline';
                    
                    setTimeout(() => {
                        copyStatus.style.display = 'none';
                        copyIcon.style.display = 'inline-block';
                    }, 2000);
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                });
        });
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// PDF open in new tab functionality
document.addEventListener('DOMContentLoaded', () => {
    const pdfOverlay = document.querySelector('.pdf-click-overlay');
    
    if (pdfOverlay) {
        pdfOverlay.addEventListener('click', function() {
            window.open('assets/resume.pdf', '_blank');
        });
    }
});