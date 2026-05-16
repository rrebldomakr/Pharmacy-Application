document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop page refresh

    // 1. Grab values from inputs
    const nameInput = document.getElementById('username').value;
    const messageInput = document.getElementById('message').value;
    const feedback = document.getElementById('formFeedback');

    // 2. Simple XSS Mitigation Function (Sanitization)
    function sanitizeInput(str) {
        return str.replace(/[&<>"']/g, function(match) {
            const escapeChars = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#x27;'
            };
            return escapeChars[match];
        });
    }

    const cleanName = sanitizeInput(nameInput);
    const cleanMessage = sanitizeInput(messageInput);

    // 3. Execution / UI Update
    feedback.style.color = '#00ff66';
    feedback.innerHTML = `Transmission received safely, ${cleanName}.`;
    
    // Clear the form
    document.getElementById('contactForm').reset();
});
