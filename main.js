
fetch('https://pokeapi.co/api/v2/pokemon/1')
.then(res => res.json())
.then(data => {
    const pokeWeight = document.querySelector('.poke-weight');
    const pokeHeight = document.querySelector('.poke-height');
    const pokeName = document.querySelector('.poke-name');
    const pokeTypeOne = document.querySelector ('.poke-type-one');
    const pokeTypeTwo = document.querySelector('.poke-type-two');

    pokeWeight.textContent = data['weight'];
    pokeHeight.textContent = data['height'];
    pokeName.textContent = data['name'];

    const pokeType = data['types'];
    const pokeFirstType = pokeType[0];
    const pokeSecondType = pokeType[1];
    
    pokeTypeOne.textContent = pokeFirstType['type']['name'];

    if(pokeSecondType){
        pokeTypeTwo.textContent = pokeSecondType['type']['name'];
    } else {
        pokeTypeTwo.classList.add('hide');
        pokeSecondType.textContent = '';
    }


});