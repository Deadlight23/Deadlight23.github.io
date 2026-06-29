async function getUserRepos(ghUserName) {
    try {
        const res = await fetch(`https://api.github.com/users/${ghUserName}/repos`);
        const repos = await res.json();

        const repoList = document.getElementById("repo-list");

      for (const repo of repos) {
    const card = document.createElement("article");

    card.innerHTML = `
        <h2>${repo.name}</h2>
        <p>${repo.description ?? "No description"}</p>
        <a href="${repo.html_url}" target="_blank">View on GitHub</a>
    `;

    repoList.appendChild(card);
}

    } catch (error) {
        console.error(error);
    }
}

getUserRepos("Deadlight23");
