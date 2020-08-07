// STATS
document.querySelector('#months').textContent = new Date().getMonth() - new Date(2020, 04, 20).getMonth();

const repositories = fetch("https://api.github.com/users/AnthonyKuang")
  .then(response => response.json())
  .then(data => data.public_repos)
  .then(repos => document.querySelector('#repositories').textContent = repos);

// MEDIUM
fetch('https://api.medium.com/v1/me', {
    method: 'GET',
    mode: 'no-cors',
    headers: new Headers(
      {"Content-Type": "application/json",
      "Accept": "application/json"}
    )
  }
).then(response => response.json())
 .then(json => console.log(json));