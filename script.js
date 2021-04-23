// The bootstrap container that all the data will be appended to
const mainDiv = document.querySelector(".card-group");

// A function to get and return the details from the individual Pokemon URLs
const getDetails = async (pokeURL) => {
    const response = await fetch(pokeURL)
    const result = await response.json()
    return result; {
}
};

// A function that fetches all the Pokemon and their URLs from the API, then awaits the results of the getDetails function.
const fetchPokemon = async () => {
    
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151") // Fetches the 151 original Pokemon
        const result = await response.json();
        console.log(result)
        result.results.forEach (async (poke) => {
        const details = await getDetails(poke.url)

// Defining variables for the data and images that will be diplayed
        const pokeDiv = document.createElement('div');
        const pokeName = document.createElement('h3');
        const pokeType = document.createElement("div");
        const pokeType1 = document.createElement('p');
        const pokeType2 = document.createElement('p');
        const heightWeight = document.createElement("div");
        const pokeWeight = document.createElement('p');
        const pokeHeight = document.createElement('p')
        const pokeAbilities = document.createElement("div")
        const pokeAbility1 = document.createElement('p')
        const pokeAbility2 = document.createElement('p')
        const img = document.createElement("img")
        const img2 = document.createElement("img")
        img2.src = (details.sprites.back_default)
        img.src=(details.sprites.front_default);        

// Adding classes for styling
        pokeName.classList.add("card-header");
        pokeDiv.classList.add("card-mb-3");
        pokeType.classList.add("card-inner")
        pokeAbilities.classList.add("card-inner")
        heightWeight.classList.add("card-inner")

// Creating the text content and appending everything to the page
        pokeName.textContent = `#${details.id}: ${poke.name.toUpperCase()}`
        pokeType.textContent = "TYPE:"
        pokeType1.textContent =  "*" + details.types[0].type.name;
        if (details.types[1]){
            pokeType2.textContent = "*" + details.types[1].type.name;
        }
        pokeHeight.textContent = `WEIGHT: ${details.weight}`;
        pokeWeight.textContent = `HEIGHT: ${details.height}`;
        pokeAbilities.textContent = "ABILITIES:"
        if(details.abilities[0]){
        pokeAbility1.textContent = "*" + details.abilities[0].ability.name};
        if (details.abilities[1]){
                pokeAbility2.textContent = "*" + details.abilities[1].ability.name};
        
        pokeDiv.appendChild(pokeName);
        pokeDiv.appendChild(img);
        pokeDiv.appendChild(img2);
        pokeDiv.appendChild(heightWeight);
        heightWeight.appendChild(pokeWeight);
        heightWeight.appendChild(pokeHeight);
        pokeDiv.appendChild(pokeAbilities);
        pokeAbilities.appendChild(pokeAbility1);
        pokeAbilities.appendChild(pokeAbility2);
        pokeDiv.appendChild(pokeType);
        pokeType.appendChild(pokeType1);
        pokeType.appendChild(pokeType2);
        mainDiv.appendChild(pokeDiv);
    
        console.log(details)
    })   
}

// Calling the function to fetch and display everything!
fetchPokemon()
  

