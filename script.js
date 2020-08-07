// STATS
document.querySelector('#months').textContent = new Date().getMonth() - new Date(2020, 05, 01).getMonth();

const repositories = fetch("https://api.github.com/users/AnthonyKuang")
  .then(response => response.json())
  .then(data => data.public_repos)
  .then(repos => document.querySelector('#repositories').textContent = repos);