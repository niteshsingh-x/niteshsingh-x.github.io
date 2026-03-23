// Dark Mode Toggle
function initDarkMode() {
    const darkModeBtn = document.getElementById('dark-mode-toggle');
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Apply saved preference on page load
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeBtn.textContent = '☀️ Light Mode';
    }
    
    // Toggle dark mode on button click
    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isNowDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isNowDark);
        darkModeBtn.textContent = isNowDark ? '☀️ Light Mode' : '🌙 Dark Mode';
    });
}

// Fetching GitHub repositories
async function fetchRepositories() {
    const username = 'niteshsingh-x'; 
    console.log('Fetching repos for:', username);
    
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        console.log('Response status:', response.status);
        
        const repos = await response.json();
        console.log('Fetched repos:', repos);
        
        // Filter out forked repos and sort by stars
        const ownRepos = repos
            .filter(repo => !repo.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6);
        
        console.log('Filtered repos:', ownRepos);
        displayRepositories(ownRepos);
    } catch (error) {
        console.error('Error fetching repos:', error);
    }
}

function displayRepositories(repos) {
    const container = document.getElementById('projects-container');
    console.log('Displaying repos:', repos);
    
    if (!container) {
        console.error('Projects container not found!');
        return;
    }
    
    // Clear existing content before adding new projects
    container.innerHTML = '';
    
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

// Run when page loads
document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    fetchRepositories();
});
