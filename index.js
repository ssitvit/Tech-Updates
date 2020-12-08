const githubUrl = "https://api.github.com/"
fetch(githubUrl+"orgs/ieeessitvit/repos")
.then(async (res) => {
    const repos = await res.json()
    const archives = document.getElementById('repos')
    repos.forEach(data => {
        const repo = document.createElement('a')
        repo.href = data.html_url
        repo.textContent = data.name
        repo.className = 'archive'
        archives.appendChild(repo);
    });
})