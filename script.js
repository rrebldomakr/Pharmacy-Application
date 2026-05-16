// Grab DOM nodes
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const decryptBtn = document.getElementById('decryptBtn');
const contactInfo = document.getElementById('contactInfo');

// --- ENGINE 1: Re-engineered Card Filter System ---
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle active button states
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// --- ENGINE 2: Native Clickable Tile Navigation ---
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const url = card.getAttribute('data-link');
        // Only run navigation if the string is set and not a placeholder '#'
        if (url && url !== '#') {
            window.open(url, '_blank');
        }
    });
});

// --- ENGINE 3: Secure Comms Terminal Decryption ---
if (decryptBtn && contactInfo) {
    decryptBtn.addEventListener('click', () => {
        contactInfo.classList.toggle('hidden');
        if (!contactInfo.classList.contains('hidden')) {
            decryptBtn.innerText = "🔒 Lock Comms Channel";
        } else {
            decryptBtn.innerText = "🔓 Decrypt Contact Data";
        }
    });
}
