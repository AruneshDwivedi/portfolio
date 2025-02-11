document.addEventListener('DOMContentLoaded', () => {
    // Cache frequently used elements
    const body = document.body;
    const modeToggle = document.getElementById('modeToggle');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const menuLinks = document.querySelector('.menu-links');
    const downloadCvBtn = document.getElementById('downloadCvBtn');
    const projectButtons = document.querySelectorAll('.Project-btn');

    // Ensure page starts at the top on refresh
    history.replaceState(null, null, window.location.pathname);
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 0);

    // Initialize dark mode based on localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    // Dark mode toggle
    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.removeItem('darkMode');
        }
    });

    // Hamburger menu toggle
    if (hamburgerIcon && menuLinks) {
        hamburgerIcon.addEventListener('click', () => {
            menuLinks.classList.toggle('open');
            hamburgerIcon.classList.toggle('open');
        });
    }

    // Download CV button event
    downloadCvBtn.addEventListener('click', () => {
        window.open('assets/Arunesh-resume.pdf', '_blank');
    });

    // Project buttons event (opens provided links)
    projectButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const url = btn.getAttribute('data-link');
            window.open(url, '_blank');
        });
    });

    // ----- Arrow Navigation for Each Section -----
    // Select all sections with an id attribute
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section, index) => {
        // Skip the last section
        if (index < sections.length - 1) {
            const nextSectionId = sections[index + 1].id;
            // Create an anchor element
            const arrowLink = document.createElement('a');
            arrowLink.href = '#' + nextSectionId;
            arrowLink.classList.add('arrow-link');
            // Insert the arrow image markup
            arrowLink.innerHTML = '<img src="./assets/arrow.png" alt="Scroll Down" class="icon arrow" />';
            
            // Create a wrapper div for easier styling
            const arrowWrapper = document.createElement('div');
            arrowWrapper.classList.add('arrow-wrapper');
            arrowWrapper.appendChild(arrowLink);
            
            // Append the arrow wrapper at the end of the current section
            section.appendChild(arrowWrapper);
        }
    });
});
