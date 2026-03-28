// ==================== LANGUAGE SUPPORT ====================
const translations = {
    en: {
        headerName: "Nitesh Singh",
        headerSub: "Turning ideas into reality through code 🚀",
        viewGithub: "View GitHub →",
        contactMe: "Contact Me",
        skillsTitle: "Skills & Technologies",
        projectsTitle: "My Projects",
        viewOnGithub: "View on GitHub →",
        statsTitle: "GitHub Stats",
        stars: "⭐ Stars",
        repos: "📦 Repos",
        followers: "👨‍💻 Followers",
        contactTitle: "Get In Touch",
        contactForm: {
            name: "Your Name",
            email: "Your Email",
            message: "Your Message",
            send: "Send Message",
            sending: "⏳ Sending...",
            success: "✅ Message received! Thank you!",
            error: "❌ Error sending message. Please try again."
        },
        resume: "📄 Resume",
        copyright: "©2026 My Portfolio"
    },
    
    hi: {
        headerName: "नितेश सिंह",
        headerSub: "कोड के माध्यम से विचारों को वास्तविकता में बदलना 🚀",
        viewGithub: "GitHub देखें →",
        contactMe: "मुझसे संपर्क करें",
        skillsTitle: "कौशल और तकनीकें",
        projectsTitle: "मेरी परियोजनाएं",
        viewOnGithub: "GitHub पर देखें →",
        statsTitle: "GitHub आंकड़े",
        stars: "⭐ स्टार्स",
        repos: "📦 रेपो",
        followers: "👨‍💻 फॉलोअर्स",
        contactTitle: "संपर्क में रहें",
        contactForm: {
            name: "आपका नाम",
            email: "आपका ईमेल",
            message: "आपका संदेश",
            send: "संदेश भेजें",
            sending: "⏳ भेज रहे हैं...",
            success: "✅ संदेश प्राप्त हुआ! धन्यवाद!",
            error: "❌ संदेश भेजने में त्रुटि। कृपया पुनः प्रयास करें।"
        },
        resume: "📄 रिज्यूमे",
        copyright: "©2026 मेरा पोर्टफोलियो"
    },
    
    es: {
        headerName: "Nitesh Singh",
        headerSub: "Convirtiendo ideas en realidad a través del código 🚀",
        viewGithub: "Ver GitHub →",
        contactMe: "Contáctame",
        skillsTitle: "Habilidades y Tecnologías",
        projectsTitle: "Mis Proyectos",
        viewOnGithub: "Ver en GitHub →",
        statsTitle: "Estadísticas de GitHub",
        stars: "⭐ Estrellas",
        repos: "📦 Repositorios",
        followers: "👨‍💻 Seguidores",
        contactTitle: "Ponte en Contacto",
        contactForm: {
            name: "Tu Nombre",
            email: "Tu Email",
            message: "Tu Mensaje",
            send: "Enviar Mensaje",
            sending: "⏳ Enviando...",
            success: "✅ ¡Mensaje recibido! ¡Gracias!",
            error: "❌ Error al enviar el mensaje. Por favor, intenta de nuevo."
        },
        resume: "📄 Currículum",
        copyright: "©2026 Mi Portafolio"
    },
    
    fr: {
        headerName: "Nitesh Singh",
        headerSub: "Transformer les idées en réalité par le code 🚀",
        viewGithub: "Voir GitHub →",
        contactMe: "Me Contacter",
        skillsTitle: "Compétences et Technologies",
        projectsTitle: "Mes Projets",
        viewOnGithub: "Voir sur GitHub →",
        statsTitle: "Statistiques GitHub",
        stars: "⭐ Étoiles",
        repos: "📦 Dépôts",
        followers: "👨‍💻 Abonnés",
        contactTitle: "Entrez en Contact",
        contactForm: {
            name: "Votre Nom",
            email: "Votre Email",
            message: "Votre Message",
            send: "Envoyer le Message",
            sending: "⏳ Envoi en cours...",
            success: "✅ Message reçu! Merci!",
            error: "❌ Erreur lors de l'envoi du message. Veuillez réessayer."
        },
        resume: "📄 CV",
        copyright: "©2026 Mon Portfolio"
    }
};

function getCurrentLanguage() {
    return localStorage.getItem('language') || 'en';
}

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    location.reload();
}

function t(key) {
    const lang = getCurrentLanguage();
    const keys = key.split('.');
    let value = translations[lang];
    
    for (let k of keys) {
        value = value[k];
    }
    
    return value || key;
}

function updatePageLanguage() {
    const headerName = document.getElementById('header-name');
    if (headerName) headerName.textContent = t('headerName');
    
    const headerSub = document.getElementById('header-sub');
    if (headerSub) headerSub.textContent = t('headerSub');
    
    const viewGithubBtn = document.getElementById('view-github');
    if (viewGithubBtn) viewGithubBtn.textContent = t('viewGithub');
    
    const contactMeBtn = document.getElementById('contact-me');
    if (contactMeBtn) contactMeBtn.textContent = t('contactMe');
    
    const skillsTitle = document.getElementById('skills-title');
    if (skillsTitle) skillsTitle.textContent = t('skillsTitle');
    
    const projectsTitle = document.getElementById('projects-title');
    if (projectsTitle) projectsTitle.textContent = t('projectsTitle');
    
    const statsTitle = document.getElementById('stats-title');
    if (statsTitle) statsTitle.textContent = t('statsTitle');
    
    const statStars = document.getElementById('stat-stars');
    if (statStars) statStars.textContent = t('stars');
    
    const statRepos = document.getElementById('stat-repos');
    if (statRepos) statRepos.textContent = t('repos');
    
    const statFollowers = document.getElementById('stat-followers');
    if (statFollowers) statFollowers.textContent = t('followers');
    
    const contactTitle = document.querySelector('.contact h2');
    if (contactTitle) contactTitle.textContent = t('contactTitle');
    
    const nameInput = document.getElementById('name');
    if (nameInput) nameInput.placeholder = t('contactForm.name');
    
    const emailInput = document.getElementById('email');
    if (emailInput) emailInput.placeholder = t('contactForm.email');
    
    const messageInput = document.getElementById('message');
    if (messageInput) messageInput.placeholder = t('contactForm.message');
    
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) submitBtn.textContent = t('contactForm.send');
    
    const resumeLink = document.getElementById('resume-link');
    if (resumeLink) resumeLink.textContent = t('resume');
    
    const footerCopyright = document.getElementById('footer-copyright');
    if (footerCopyright) footerCopyright.innerHTML = `${t('copyright')} | <a href="https://github.com/niteshsingh-x">GitHub</a>`;
}

// ==================== LANGUAGE DROPDOWN ====================
function setupLanguageDropdown() {
    const langDropdown = document.querySelector('.language-dropdown');
    const langDropdownBtn = document.querySelector('.lang-dropdown-btn');
    const langLinks = document.querySelectorAll('.lang-dropdown-menu a');
    const currentLang = getCurrentLanguage();
    
    const langNames = {
        en: '🇬🇧 EN',
        hi: '🇮🇳 HI',
        es: '🇪🇸 ES',
        fr: '🇫🇷 FR'
    };
    
    // Set initial button text
    langDropdownBtn.textContent = langNames[currentLang];
    
    // Toggle dropdown
    langDropdownBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        langDropdown.classList.toggle('active');
    });
    
    // Set active language
    langLinks.forEach(link => {
        if (link.dataset.lang === currentLang) {
            link.classList.add('active');
        }
    });
    
    // Handle language clicks
    langLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const selectedLang = this.dataset.lang;
            
            // Remove active from all
            langLinks.forEach(l => l.classList.remove('active'));
            
            // Add active to clicked
            this.classList.add('active');
            
            // Update button
            langDropdownBtn.textContent = langNames[selectedLang];
            
            // Close dropdown
            langDropdown.classList.remove('active');
            
            // Change language
            setLanguage(selectedLang);
        });
    });
    
    // Close dropdown on outside click
    document.addEventListener('click', function(e) {
        if (!langDropdown.contains(e.target)) {
            langDropdown.classList.remove('active');
        }
    });
}

// ==================== DARK MODE ====================
function initDarkMode() {
    const darkModeBtn = document.getElementById('dark-mode-toggle');
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeBtn.textContent = '☀️ Light Mode';
    }
    
    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isNowDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isNowDark);
        darkModeBtn.textContent = isNowDark ? '☀️ Light Mode' : '🌙 Dark Mode';
    });
}

// ==================== TYPING ANIMATION ====================
function initTypingEffect() {
    const texts = [
        'Full Stack Developer 💻',
        'GitHub Enthusiast 🐙',
        'Problem Solver 🧠',
        'Open Source Lover ❤️',
        'UI/UX Designer 🎨'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typedText = document.getElementById('typed-text');
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typedText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, 1500);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
        
        setTimeout(type, isDeleting ? 50 : 100);
    }
    
    type();
}

// ==================== GITHUB REPOSITORIES ====================
async function fetchRepositories() {
    const username = 'niteshsingh-x';
    
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const repos = await response.json();
        
        const ownRepos = repos
            .filter(repo => !repo.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6);
        
        displayRepositories(ownRepos);
    } catch (error) {
        console.error('Error fetching repos:', error);
        document.getElementById('projects-container').innerHTML = '<p style="color: white; text-align: center;">Unable to load projects. Please try again later.</p>';
    }
}

function displayRepositories(repos) {
    const container = document.getElementById('projects-container');
    
    if (!container) {
        return;
    }
    
    container.innerHTML = '';
    
    if (repos.length === 0) {
        container.innerHTML = '<p style="color: white; text-align: center; grid-column: 1/-1;">No projects found.</p>';
        return;
    }
    
    repos.forEach(repo => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || 'No description available'}</p>
            <p><strong>⭐ Stars:</strong> ${repo.stargazers_count}</p>
            <div class="project-links">
                <a href="${repo.html_url}" target="_blank">${t('viewOnGithub')}</a>
            </div>
        `;
        container.appendChild(card);
    });
}

// ==================== GITHUB STATS ====================
async function fetchGitHubStats() {
    const username = 'niteshsingh-x';
    
    try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userResponse.json();
        
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
        const reposData = await reposResponse.json();
        
        const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        
        document.getElementById('total-stars').textContent = totalStars;
        document.getElementById('repo-count').textContent = reposData.length;
        document.getElementById('followers').textContent = userData.followers;
    } catch (error) {
        console.error('Error fetching stats:', error);
    }
}

// ==================== CONTACT FORM ====================
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const statusMsg = document.getElementById('form-status');
        
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyc3lAx8Yr1mon2oUEFA9zl1cUQZEgBzgx1ERdB4BPsrd2L77A6l-xNiggZTqGPilTI/exec';
        
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);
        
        statusMsg.textContent = t('contactForm.sending');
        statusMsg.style.color = '#ffd700';
        
        fetch(scriptURL, {method: 'POST', body: formData})
            .then(response => {
                statusMsg.textContent = t('contactForm.success');
                statusMsg.style.color = '#90EE90';
                contactForm.reset();
                
                setTimeout(() => {
                    statusMsg.textContent = '';
                }, 3000);
            })
            .catch(error => {
                statusMsg.textContent = t('contactForm.success');
                statusMsg.style.color = '#90EE90';
                contactForm.reset();
            });
    });
}

// ==================== INITIALIZE ALL ====================
document.addEventListener('DOMContentLoaded', function() {
    initDarkMode();
    setupLanguageDropdown();
    updatePageLanguage();
    initTypingEffect();
    fetchRepositories();
    fetchGitHubStats();
    setupContactForm();
});