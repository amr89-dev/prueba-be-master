const axios = require("axios");
const user = "google";
const url = `https://api.github.com/users/${user}/repos`;

async function getRepos() {
  console.log("***** Consumo de APIs *****");
  try {
    const response = await axios.get(url);
    const repos = response.data;
    const sortedRepos = repos.sort(
      (a, b) => b.stargazers_count - a.stargazers_count
    );
    const top10Repos = sortedRepos.slice(0, 10);

    for (const repo of top10Repos) {
      console.log(
        `Nombre: ${repo.name}, Estrellas: ${repo.stargazers_count} ⭐️`
      );
    }
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

module.exports = getRepos;
