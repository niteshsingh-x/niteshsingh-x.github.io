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

// ==================== FETCH GITHUB AVATAR ====================
async function fetchGitHubAvatar() {
    const username = 'niteshsingh-x';
    
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const userData = await response.json();
        
        const avatarImg = document.getElementById('avatar-img');
        if (avatarImg && userData.avatar_url) {
            avatarImg.src = userData.avatar_url;
        }
    } catch (error) {
        console.error('Error fetching avatar:', error);
    }
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
                <a href="${repo.html_url}" target="_blank">View on GitHub →</a>
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
        
        statusMsg.textContent = '⏳ Sending...';
        statusMsg.style.color = '#ffd700';
        
        fetch(scriptURL, {method: 'POST', body: formData})
            .then(response => {
                statusMsg.textContent = '✅ Message received! Thank you!';
                statusMsg.style.color = '#90EE90';
                contactForm.reset();
                
                setTimeout(() => {
                    statusMsg.textContent = '';
                }, 3000);
            })
            .catch(error => {
                statusMsg.textContent = '✅ Message received! Thank you!';
                statusMsg.style.color = '#90EE90';
                contactForm.reset();
            });
    });
}

// ==================== INITIALIZE ALL ====================
document.addEventListener('DOMContentLoaded', function() {
    initDarkMode();
    initTypingEffect();
    fetchGitHubAvatar();
    fetchRepositories();
    fetchGitHubStats();
    setupContactForm();
});
