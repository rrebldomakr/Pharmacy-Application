// --- INTERACTIVE ARCHIVE FILTERS ---
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and add to clicked one
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const selectedFilter = button.getAttribute('data-filter');

        // Show/Hide cards dynamically
        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (selectedFilter === 'all' || cardCategory === selectedFilter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// --- DECRYPTION TERMINAL INTERACTION ---
const decryptBtn = document.getElementById('decryptBtn');
const contactInfo = document.getElementById('contactInfo');

decryptBtn.addEventListener('click', () => {
    decryptBtn.innerText = "BYPASSING FIREWALL... LOADING DATA...";
    decryptBtn.style.disabled = true;

    // Simulate a slight terminal lag delay for immersion
    setTimeout(() => {
        decryptBtn.classList.add('hidden');
        contactInfo.classList.remove('hidden');
    }, 1200); 
});
