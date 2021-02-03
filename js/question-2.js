// question 2

// const gamesUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

// const resultsContainer = document.querySelector(".results");


// async function getGames() {

//     const response = await fetch(gamesUrl);

//     const apiResults = await response.json();

//     for (let i = 0; i > apiResults.length; i++) {
//         console.log(apiResults[i].results);

//         if (i === 8) {
//             break;
//         }

//         resultsContainer.innerHTML += `<div class="result">${apiResults[i].name}</div>`;
//     }

// }

// getGames();

const url = "https://cat-fact.herokuapp.com/facts";

const resultsContainer = document.querySelector(".results");

async function getCats() {
    // fetch

    const response = await fetch(url);

    const facts = await response.json();

    resultsContainer.innerHTML = "";

    for (let i = 0; i < facts.length; i++) {
        console.log(facts[i].text);

        if (i === 8) {
            break;
        }

        resultsContainer.innerHTML += `<div class="result">${facts[i].text}</div>`;
    }
}

getCats();