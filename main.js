
fetch('https://pokeapi.co/api/v2/pokemon/1')
.then(res => res.json())
.then(data => {
    const pokeWeight = document.querySelector('.poke-weight');
    const pokeHeight = document.querySelector('.poke-height');
    const pokeName = document.querySelectorAll('.poke-name');
    const pokeTypeOne = document.querySelector ('.poke-type-one');
    const pokeTypeTwo = document.querySelector('.poke-type-two');
    const pokeImage = document.querySelectorAll('.poke-front-image');
    console.log(data['sprites']['front_default']);
    pokeWeight.textContent = data['weight'];
    pokeHeight.textContent = data['height'];
    pokeName.textContent = data['name'];
    document.getElementById("poke-front-image").src = data['sprites']['front_default'];
    const pokeType = data['types'];
    const pokeFirstType = pokeType[0];
    const pokeSecondType = pokeType[1];
    
    pokeTypeOne.textContent = pokeFirstType['type']['name'];

    if(pokeSecondType){
        pokeTypeTwo.textContent = pokeSecondType['type']['name'];
    } else {
        pokeTypeTwo.classList.add('hide');
        pokeSecondType.textContent = '';
    };
});


fetch('https://pokeapi.co/api/v2/pokemon?limit=900')
.then(res => res.json())
.then(data => { 
for (var i = 0; i < 1118; i+=1) {
    // console.log(data.results[i].pokemon)

};

const pokeName = document.querySelectorAll('.poke-name');
for (let i = 0; i < pokeName.length ; i++) {
    const pokeName = document.querySelectorAll('.poke-name');
    const pokeNameList = pokeName[i];
    const resultData = data.results[i];
    const { name } = resultData;
    
    if (resultData) {
        pokeNameList.textContent = name;
    } else {
        pokeNameList.textContent = '';
    } 
} 

});


fetch('https://pokeapi.co/api/v2/pokemon?limit=900')
.then(res => res.json())
.then(data => { 

console.log(data.results[1].name)

for (var i = 0; i < 1118; i+=1) {
    console.log(data)
    console.log(data.results[i].name)

};


})