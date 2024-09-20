const pokemonContainer = document.getElementById(`pokemon-container`);

fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`)
    .then(response => response.json())
    .then(data => {
        data.results.forEach(element => {
            fetch(element.url)
                .then(response => response.json())
                .then(data => {
                    const card = document.createElement(`div`);
                    card.classList.add(`card`);

                    const img = document.createElement(`img`);
                    img.src = data.sprites.front_default;

                    const pokemonName = document.createElement(`h2`);
                    pokemonName.textContent = element.name;

                    pokemonContainer.appendChild(card);
                    card.appendChild(img);
                    card.appendChild(pokemonName);
                })
                .catch(error => console.log(error));
        })
    })
    .catch(error => console.log(error));