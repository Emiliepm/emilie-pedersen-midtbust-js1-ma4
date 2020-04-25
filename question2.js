const gamesUrl = "https://api.rawg.io/api/games";
const corsEnabledUrl = "https://noroffcors.herokuapp.com/" + gamesUrl;

async function fetchGames() {
  try {
    const response = await fetch(corsEnabledUrl);
    const games = await response.json();
    displayGames(games);
  } catch (error) {
    console.log(error);
  }
}

fetchGames();

function displayGames(games) {
  console.dir(games);
  const gamesList = games.results;
  const gameContainer = document.querySelector(".results");

  let html = "";

  for (let i = 0; i < gamesList.length; i++) {
    html += `<div class = "game">
    <h2>${gamesList[i].name}</h2>
    <img src=${gamesList[i].background_image} alt=${gamesList[i].name}/>
    </div>`;
  }

  gameContainer.innerHTML = html;
}
