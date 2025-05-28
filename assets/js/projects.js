/* filepath: d:\001.AVV\Z.Resume\Git\portfolio\assets\js\projects.js */
// Projects page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Get all project cards and popups
    const projectCards = document.querySelectorAll('.project-card');
    const projectPopups = document.querySelectorAll('.project-popup');
    const popupOverlay = document.querySelector('.popup-overlay');
    const closeButtons = document.querySelectorAll('.close-popup');
    
    // Helper function to close all popups
    function closeAllPopups() {
        projectPopups.forEach(popup => {
            popup.classList.remove('active');
            setTimeout(() => {
                if (!popup.classList.contains('active')) {
                    popup.style.display = 'none';
                }
            }, 300);
        });
        
        popupOverlay.classList.remove('active');
        setTimeout(() => {
            if (!popupOverlay.classList.contains('active')) {
                popupOverlay.style.display = 'none';
            }
        }, 300);
        
        // Re-enable scrolling on the body
        document.body.style.overflow = '';
    }
    
    // Add click event for each project card
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const popup = document.getElementById(`${projectId}-popup`);
            
            if (popup) {
                // Display overlay and popup
                popupOverlay.style.display = 'block';
                popup.style.display = 'block';
                
                // Force reflow before adding active class for transition to work
                popupOverlay.offsetHeight;
                popup.offsetHeight;
                
                // Add active class to trigger CSS transition
                setTimeout(() => {
                    popupOverlay.classList.add('active');
                    popup.classList.add('active');
                }, 10);
                
                // Disable scrolling on the body
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close popup when clicking on close button
    closeButtons.forEach(button => {
        button.addEventListener('click', closeAllPopups);
    });
    
    // Close popup when clicking on overlay
    popupOverlay.addEventListener('click', closeAllPopups);
    
    // Close popup with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeAllPopups();
        }
    });
    
    // Prevent closing when clicking inside the popup content
    projectPopups.forEach(popup => {
        popup.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
});