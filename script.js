// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Content Loading
window.addEventListener('load', function() {
    const resumeContent = document.getElementById('resume-content');
    fetch('resume.html')
        .then(response => response.text())
        .then(html => {
            resumeContent.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading resume:', error);
        });
});

// Form Validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        nameInput.focus();
        return;
    }

    if (emailInput.value.trim() === '') {
        alert('Please enter your email address.');
        emailInput.focus();
        return;
    }

    if (messageInput.value.trim() === '') {
        alert('Please enter a message.');
        messageInput.focus();
        return;
    }

    // Form is valid, you can submit it or perform further actions here
    alert('Form submitted successfully!');
    form.reset();
});
