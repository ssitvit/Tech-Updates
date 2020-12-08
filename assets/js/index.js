const githubUrl = "https://api.github.com/"
fetch(githubUrl+"orgs/ieeessitvit/repos?sort=created&direction=desc")
.then(async (res) => {
	const repos = await res.json()
	let top = ''
    for(let j=0; j<3; j++){
		top+=`
		<div class="project-card">
			<div>
			<div class="project-name">${repos[j].name}</div>
			<small>Last updated: <span class="updated">${repos[j].updated_at.substring(0,10)}</span></small>
			<div class="project-desc">${repos[j].description || ''}</div>
			</div>
			<a class="repo-link" href=${repos[j].html_url}>Go to repo</a>
		</div>
		`
    }
	document.getElementById('projects').innerHTML = top;
    const archives = document.getElementById('repos')
    repos.slice(3).forEach(data => {
        const repo = document.createElement('a')
        repo.href = data.html_url
        repo.textContent = data.name
        repo.className = 'archive'
        archives.appendChild(repo);
    });
}).catch(e=>{ console.log(e)})

function seeMore(){
	document.getElementById('repos').style.display = 'unset';
    document.getElementById('see-more').style.visibility = 'hidden';
}