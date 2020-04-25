const gamesUrl = "https://api.rawg.io/api/games/4200";
const corsEnabledUrl = "https://noroffcors.herokuapp.com/" + gamesUrl;

async function fetchJSON() {
  try {
    const response = await fetch(corsEnabledUrl);
    const json = await response.json();
    createGameDetails(json);
  } catch (error) {
    console.log(error);
  }
}

fetchJSON();

function createGameDetails(json) {
  console.dir(json);


  const headingPlaceholder = document.querySelector("h1");
  headingPlaceholder.innerHTML = json.name;

  const imagePlaceholder = document.querySelector(".image");
  const imageUrl = "url('" + json.background_image + "')";
  imagePlaceholder.style.backgroundImage = imageUrl;

  const descriptionPlaceholder = document.querySelector(".description");
  descriptionPlaceholder.innerHTML = json.description;
}
