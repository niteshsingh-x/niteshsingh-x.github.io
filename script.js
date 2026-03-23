// Fetching GitHub repositories
async function fetchRepositories() {
    const username = 'niteshsingh-x'; 
    
    try {
        const response = await fetch(`https://api.github.com/users/${niteshsingh-x}/repos`);
        const repos = await response.json();
        
        // Filter out forked repos and sort by stars
        const ownRepos = repos
            .filter(repo => !repo.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6); // Show top 6 repos
        
        displayRepositories(ownRepos);
    } catch (error) {
        console.error('Error fetching repos:', error);
    }
}

function displayRepositories(repos) {
    const container = document.getElementById('projects-container');
    
    repos.forEach(repo => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || 'No description available'}</p>
            <p><strong>⭐ Stars:</strong> ${repo.stargazers_count}</p>
            <a href="${repo.html_url}" target="_blank">View on GitHub →</a>
        `;
        container.appendChild(card);
    });
}

// Run when page loads
document.addEventListener('DOMContentLoaded', fetchRepositories);