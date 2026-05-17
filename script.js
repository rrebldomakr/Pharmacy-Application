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

// --- NATIVE CLICKABLE TILE REDIRECTIONS ---
projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
        // FIX: If they specifically click your new text link, let the link handle it
        // This prevents opening the same live site in two different tabs at once!
        if (e.target.closest('.project-link')) {
            return; 
        }

        const projectId = card.getAttribute('data-id');
        
        switch (projectId) {
            case 'lekker':
                // FIX: Swapped out localhost for your actual live recruitment link
                window.open('http://lekkerexchange.infinityfreeapp.com/', '_blank');
                break;
            case 'weather-app':
                window.open('https://rrebldomakr.github.io/Global-Pass/', '_blank');
                break;
            case 'budget-tracker':
                window.open('https://rrebldomakr.github.io/student-task-manager/', '_blank');
                break;
            case 'security-tool':
            case 'portfolio':
                // Placeholders for your other files/links
                break;
        }
    });
});

// --- DECRYPTION TERMINAL INTERACTION ---
const decryptBtn = document.getElementById('decryptBtn');
const contactInfo = document.getElementById('contactInfo');

decryptBtn.addEventListener('click', () => {
    decryptBtn.innerText = "BYPASSING FIREWALL... LOADING DATA...";
    
    // FIX: Changed from .style.disabled to proper boolean attribute 
    // This stops double-clicks while the terminal lag effect runs
    decryptBtn.disabled = true; 

    // Simulate a slight terminal lag delay for immersion
    setTimeout(() => {
        decryptBtn.classList.add('hidden');
        contactInfo.classList.remove('hidden');
    }, 1200); 
});
