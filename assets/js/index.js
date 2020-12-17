const githubUrl = "https://api.github.com/"
fetch(githubUrl+"orgs/ieeessitvit/repos?sort=updated&direction=desc")
.then(async (res) => {
	const projects = document.getElementById('projects')
	projects.innerHTML = 'Loading...'
	const repos = await res.json()
	let top = '';
    for(let j=0; j<2; j++){
		var languages=await (await fetch(repos[j].languages_url)).json()
		let allLang = '';
		for(let l in languages){
			allLang += `<span class='lang'>${l}</span>`
		}
		top+=`
		<div onclick="gotoRepo('${repos[j].html_url}')" class="project-card">
			<div class="project-name">${repos[j].name}</div>
			<div class="project-data">
			<div class="other-data">
			<small>Updated: <span class="updated">${repos[j].updated_at.substring(0,10)}</span></small>
			<div class="project-desc">${repos[j].description || ''}</div>
			</div>
			<div class="repo-info">
				Stats:<br>
				<span class="stars">Stars: ${repos[j].stargazers_count}</span>
				<span class="forks">Forks: ${repos[j].forks_count}</span>
				<div class="languages">
					Languages:<br>
					${allLang}
				</div>
			</div>
			</div>
		</div>
		`
    }
	projects.innerHTML = top;
    const archives = document.getElementById('repos')
    repos.slice(2).forEach(data => {
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

function gotoRepo(url){
	location.href = url;
}