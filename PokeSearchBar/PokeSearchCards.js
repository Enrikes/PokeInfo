export function createPokeSearchCard(pokemon) {
  const card = document.createElement("div");
  const pokemonName = pokemon.name;
  const pokeType = pokemon["types"];
  const pokeImage = pokemon["sprites"]["front_default"];
  const pokeTypeOneDom = pokeType["0"]["type"]["name"];
  const pokemonNameDom = document.createElement("h1");
  pokemonNameDom.innerHTML = pokemonName;
  const pokeImageContainer = document.createElement("div");
  card.appendChild(pokeImageContainer);
  const pokeId = pokemon.id;
  const pokeHeight = pokemon.height;

  //Pokemon Height
  const pokeHeightTitle = document.createElement("h3");
  pokeHeightTitle.innerHTML = `Height: ${pokeHeight}`;
  const pokeTwo = pokeType;
  const pokeThree = pokeTwo["1"];
  const filteredPokemonDom = document.querySelector(
    ".poke-card-search-wrapper"
  );
  if (pokeType.length === 2) {
    const pokeTypeTwoDom = pokeType["1"]["type"]["name"];
    filteredPokemonDom.innerHTML = `
    <div class="poke-card-search">
  <div class="pokeImageContainer pokemon-${pokeTypeOneDom}">
  <img src="${pokeImage}" id="poke-Image">
  </div>
  <div class="poke-desc">
    <h1>${pokemonName}</h1>
  <div class="pokemon-type-${pokeTypeOneDom}">${pokeTypeOneDom}</div>
  <div class="pokemon-type-${pokeTypeTwoDom}">${pokeTypeTwoDom}</div>
  <h3>Height: ${pokeHeight}</h3>
  </div>
  </div>
  `;
  } else {
    filteredPokemonDom.innerHTML = `
    <div class="poke-card-search">
  <div class="pokeImageContainer pokemon-${pokeTypeOneDom}">
  <img src="${pokeImage}" id="poke-Image">
  </div>
  <div class="poke-desc">
  <h1>${pokemonName}</h1>
  <div class="pokemon-type-${pokeTypeOneDom}">${pokeTypeOneDom}</div>
  <h3>Height: ${pokeHeight}</h3>
  </div>
  </div>
  `;
  }
  return card;
}
