// --- INTERACTIVE ARCHIVE FILTERS ---
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active'); 

        const selectedFilter = button.getAttribute('data-filter');

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
        if (e.target.closest('.project-link')) {
            return; 
        }

        const projectId = card.getAttribute('data-id');
        
        switch (projectId) {
            case 'lekker':
                window.open('http://lekkerexchange.infinityfreeapp.com/', '_blank');
                break;
            case 'weather-app':
                window.open('https://rrebldomakr.github.io/Global-Pass/', '_blank');
                break;
            case 'budget-tracker':
                window.open('https://rrebldomakr.github.io/student-task-manager/', '_blank');
                break;
            case 'security-tool':
                alert("⚠️ [ACCESS DENIED]: Security Audit asset is currently undergoing deep local simulation runtime. Full deployment pending.");
                break;
            case 'lyric-engine':
                alert("🎵 [SYSTEM NOTICE]: Audio data streams require high-fidelity patch updates. Composition manifests are securely tracked offline.");
                break;
            case 'portfolio':
                alert("👻 [SYSTEM NOTE]: Core runtime loop executing cleanly. You are currently navigating within the active DreadFolio framework.");
                break;
        }
    });
});

// --- DECRYPTION TERMINAL INTERACTION ---
const decryptBtn = document.getElementById('decryptBtn');
const contactInfo = document.getElementById('contactInfo');

decryptBtn.addEventListener('click', () => {
    decryptBtn.innerText = "BYPASSING FIREWALL... LOADING DATA...";
    decryptBtn.disabled = true; 

    setTimeout(() => {
        decryptBtn.classList.add('hidden');
        contactInfo.classList.remove('hidden');
    }, 1200); 
});
