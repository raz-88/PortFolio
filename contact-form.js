// Contact Form with Formspree (Easiest Solution)
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        if (this.form) {
            this.setupEventListeners();
        }
    }

    setupEventListeners() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });

        // Real-time validation
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearError(input));
        });
    }

    async handleSubmit() {
        if (!this.validateForm()) {
            this.showNotification('Please fix the errors before submitting.', 'error');
            return;
        }

        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        try {
            // Using Formspree - REPLACE WITH YOUR FORMSPREE URL
            const formspreeURL = 'https://formspree.io/f/xyznpldy'; // Change this!
            
            const formData = new FormData(this.form);
            
            const response = await fetch(formspreeURL, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                this.showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                this.form.reset();
                
                // Save to local storage as backup
                this.saveToLocalStorage();
            } else {
                throw new Error('Form submission failed');
            }
            
        } catch (error) {
            console.error('Error sending message:', error);
            this.showNotification('Failed to send message. Please email me directly at your-email@gmail.com', 'error');
        } finally {
            // Restore button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }

    validateForm() {
        let isValid = true;
        const fields = ['name', 'email', 'subject', 'message'];
        
        fields.forEach(field => {
            const input = document.getElementById(field);
            if (!this.validateField(input)) {
                isValid = false;
            }
        });
        
        return isValid;
    }

    validateField(input) {
        const value = input.value.trim();
        let isValid = true;
        let errorMessage = '';

        switch(input.id) {
            case 'name':
                if (value.length < 2) {
                    errorMessage = 'Name must be at least 2 characters long';
                    isValid = false;
                }
                break;
                
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    errorMessage = 'Please enter a valid email address';
                    isValid = false;
                }
                break;
                
            case 'subject':
                if (value.length < 5) {
                    errorMessage = 'Subject must be at least 5 characters long';
                    isValid = false;
                }
                break;
                
            case 'message':
                if (value.length < 10) {
                    errorMessage = 'Message must be at least 10 characters long';
                    isValid = false;
                }
                break;
        }

        if (!isValid) {
            this.showFieldError(input, errorMessage);
        } else {
            this.clearError(input);
        }

        return isValid;
    }

    showFieldError(input, message) {
        this.clearError(input);
        
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        errorElement.style.cssText = `
            color: #dc3545;
            font-size: 0.875rem;
            margin-top: 0.25rem;
            display: block;
        `;
        
        input.parentNode.appendChild(errorElement);
        input.style.borderColor = '#dc3545';
    }

    clearError(input) {
        const errorElement = input.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
        input.style.borderColor = '';
    }

    saveToLocalStorage() {
        try {
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                timestamp: new Date().toISOString()
            };
            
            const submissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
            submissions.push(formData);
            
            // Keep only last 20 submissions
            if (submissions.length > 20) {
                submissions.splice(0, submissions.length - 20);
            }
            
            localStorage.setItem('contact_submissions', JSON.stringify(submissions));
            console.log('Saved to localStorage:', formData);
        } catch (error) {
            console.log('Could not save to localStorage');
        }
    }

    showNotification(message, type) {
        // Remove existing notifications
        const existingNotification = document.querySelector('.form-notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = `form-notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
        `;

        document.body.appendChild(notification);

        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        // Hide after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    new ContactForm();
});