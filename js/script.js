(function() {
    // Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('show');
        });
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
            });
        });
    }

    // Contact Form
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');
    if (form && feedback) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('userName').value.trim();
            const email = document.getElementById('userEmail').value.trim();
            if (!name || !email) {
                feedback.innerHTML = '<i class="fas fa-exclamation-circle"></i> कृपया नाम और Email भरें!';
                feedback.style.color = '#f0c040';
                return;
            }
            if (!email.includes('@')) {
                feedback.innerHTML = '<i class="fas fa-exclamation-circle"></i> सही Email डालें!';
                feedback.style.color = '#f0c040';
                return;
            }
            const btn = form.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-pulse"></i> Sending...';
            btn.disabled = true;
            setTimeout(() => {
                feedback.innerHTML = '<i class="fas fa-check-circle" style="color:#00ff88;"></i> धन्यवाद! Prem Enterprises जल्दी आपसे संपर्क करेगा। 🚀';
                feedback.style.color = '#00ff88';
                btn.innerHTML = originalText;
                btn.disabled = false;
                form.reset();
                setTimeout(() => { feedback.innerHTML = ''; }, 8000);
            }, 2000);
        });
    }
})();

