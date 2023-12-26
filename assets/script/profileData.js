
async function fetchProfile() {
  const url = "https://raw.githubusercontent.com/Joaommsp/js-developer-portfolio/main/data/profile.json"
  const fecthing = await fetch(url)
  .then((response) => response.json())
  return await fecthing
}
