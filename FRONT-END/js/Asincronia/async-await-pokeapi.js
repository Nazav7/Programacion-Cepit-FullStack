
const pokemonContainer = document.getElementById(`pokemon-container`);

const fetchPokeApi = async () => {
    try{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`);
    const data = await response.json();
    data.results.forEach(async element => {
        try {
            const response = await fetch(element.url);
            const data = await response.json();

            const card = document.createElement(`div`);
            card.classList.add(`card`);

            const img = document.createElement(`img`);
            img.src = data.sprites.front_default;

            const pokemonName = document.createElement(`h2`);
            pokemonName.textContent = element.name;

            pokemonContainer.appendChild(card);
            card.appendChild(img);
            card.appendChild(pokemonName);
        } catch (error) { console.log(error) }
    })
} catch (error){console.log(error)}
}

fetchPokeApi();