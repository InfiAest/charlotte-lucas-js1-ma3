// question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const newHtmlContainer = document.querySelector(".newHtml");


async function getGames() {

    try {

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        const gameNames = data.results;

        newHtmlContainer.innerHTML = "";

        for (let i = 0; i < gameNames.length; i++) {
            // console.log(gameNames[i].name);
            // console.log(gameNames[i].rating);
            // console.log(gameNames[i].tags.length);

            if (i === 8) {
                break;
            }

            newHtmlContainer.innerHTML += `<div class="gameDetails">
                                            <h4>${gameNames[i].name}</h4>
                                            <p>Rating: ${gameNames[i].rating}</p>
                                            <p>Tags: ${gameNames[i].tags.length}</p>
                                            </div>`;
        }
    } catch (error) {
        console.log("An error occured");
        newHtmlContainer.innerHTML = displayError("An error occured in your code, dummy!");
    }

}

 getGames();

