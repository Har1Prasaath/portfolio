/* filepath: d:\001.AVV\Z.Resume\Git\portfolio\assets\js\contact.js */
// Contact page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Form submission handler
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simulate form submission with a success message
            // In a real implementation, you would send this data to a server
            
            // Create success notification
            const notification = document.createElement('div');
            notification.className = 'form-notification success';
            notification.innerHTML = `
                <div class="notification-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <div class="notification-content">
                    <h3>Message Sent!</h3>
                    <p>Thank you ${name}, your message has been received. I'll get back to you soon.</p>
                </div>
                <button class="notification-close">
                    <i class="fas fa-times"></i>
                </button>
            `;
            
            // Add notification to page
            document.body.appendChild(notification);
            
            // Reset form
            contactForm.reset();
            
            // Show notification with animation
            setTimeout(() => {
                notification.classList.add('show');
            }, 100);
            
            // Close notification when clicking close button
            const closeBtn = notification.querySelector('.notification-close');
            closeBtn.addEventListener('click', () => {
                notification.classList.remove('show');
                setTimeout(() => {
                    notification.remove();
                }, 300);
            });
            
            // Auto-remove notification after 5 seconds
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.classList.remove('show');
                    setTimeout(() => {
                        if (notification.parentNode) {
                            notification.remove();
                        }
                    }, 300);
                }
            }, 5000);
        });
    }
    
    // Add CSS for notifications dynamically
    const style = document.createElement('style');
    style.textContent = `
        .form-notification {
            position: fixed;
            bottom: 30px;
            right: 30px;
            display: flex;
            align-items: center;
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
            padding: 20px;
            transform: translateX(120%);
            transition: transform 0.3s ease;
            z-index: 1000;
            max-width: 400px;
        }
        
        .form-notification.show {
            transform: translateX(0);
        }
        
        .notification-icon {
            margin-right: 15px;
            font-size: 24px;
        }
        
        .form-notification.success .notification-icon {
            color: #4CAF50;
        }
        
        .notification-content {
            flex: 1;
        }
        
        .notification-content h3 {
            margin: 0 0 5px;
            font-size: 18px;
        }
        
        .notification-content p {
            margin: 0;
            font-size: 14px;
            color: #666;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: #999;
            cursor: pointer;
            font-size: 16px;
            padding: 5px;
            margin-left: 10px;
            transition: color 0.3s ease;
        }
        
        .notification-close:hover {
            color: #333;
        }
        
        @media (max-width: 768px) {
            .form-notification {
                bottom: 20px;
                right: 20px;
                left: 20px;
                max-width: calc(100% - 40px);
            }
        }
    `;
    document.head.appendChild(style);
});