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

// Image Slideshow Functionality
document.addEventListener('DOMContentLoaded', () => {
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (!slideshowContainer) return;
    
    const imagePaths = [
        'assets/images/p1.png',
        'assets/images/p2.png',
        'assets/images/p3.png',
        'assets/images/p4.png',
        'assets/images/p5.png',
        'assets/images/p6.png',
        'assets/images/p7.png',
        'assets/images/p8.png',
        'assets/images/s1.png',
        'assets/images/s2.png',
        'assets/images/s3.png',
        'assets/images/s4.png',
        'assets/images/s5.png',
        'assets/images/s6.png',
        'assets/images/s7.png',
        'assets/images/s8.png',
        'assets/images/s9.png'
    ];
    
    const slidesContainer = document.querySelector('.slides');
    const dotsContainer = document.querySelector('.slideshow-dots');
    let currentSlide = 0;
    
    // Create slides and dots
    imagePaths.forEach((path, index) => {
        // Create slide
        const slide = document.createElement('div');
        slide.className = 'slide';
        
        const img = document.createElement('img');
        img.src = path;
        img.alt = `Project Image ${index + 1}`;
        
        slide.appendChild(img);
        slidesContainer.appendChild(slide);
        
        // Create dot
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (index === 0) dot.classList.add('active');
        
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        
        dotsContainer.appendChild(dot);
    });
    
    // Next and Previous buttons
    const prevButton = document.querySelector('.slideshow-nav.prev');
    const nextButton = document.querySelector('.slideshow-nav.next');
    
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
    
    function prevSlide() {
        currentSlide = (currentSlide === 0) ? imagePaths.length - 1 : currentSlide - 1;
        updateSlidePosition();
    }
    
    function nextSlide() {
        currentSlide = (currentSlide === imagePaths.length - 1) ? 0 : currentSlide + 1;
        updateSlidePosition();
    }
    
    function goToSlide(index) {
        currentSlide = index;
        updateSlidePosition();
    }
    
    function updateSlidePosition() {
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update active dot
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    // Auto-advance slides every 5 seconds
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause auto-advance when hovering over slideshow
    slideshowContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    slideshowContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
});

// Page animations using Intersection Observer API
document.addEventListener('DOMContentLoaded', () => {
    // Setup animation observer
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }
    
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1
    });
    
    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-slide-right, .animate-scale');
    animatedElements.forEach(element => {
        element.style.animationPlayState = 'paused';
        observer.observe(element);
    });
});