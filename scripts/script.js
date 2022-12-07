const theCurrentName = document.getElementById('name');
const theCurrentCity = document.getElementById('city');
const theCurrentState = document.getElementById('state');
const theLargeCurrentName = document.getElementById ('largename');
const theLargeCurrentCity = document.getElementById('largecity');
const theLargeCurrentState = document.getElementById('largestate')
let theCard = document.querySelector('.card');
let theSpButton = document.getElementById('spBrewery');
let theCityStateButton = document.getElementById('citystate');
let theLargeSpButton = document.getElementById('laregespBrewery');
let theLargeCityStateButton = document.getElementById('largecitystate');
let spBrewery;
let city;
let state;
let theLarge = document.querySelector('.large');
let theSmall = document.querySelector('.small');
let theURL = `https://api.openbrewerydb.org/breweries?per_page=0`

theSmall.style.display = "none";

async function GetData(){
    let theResponse = await fetch(theURL);
    theResponse = await theResponse.json();

    for(let i = 0; i < theResponse.length; i ++){
        let theMiniCard = document.createElement('div');
        theMiniCard.className = ('minicard');
        let a = document.createElement('a');
        let link = document.createTextNode(`${theResponse[i].name}`);
        a.appendChild(link);
        a.href = (theResponse[i].website_url);
        let theDisplayStreet1 = document.createElement('p');
        theDisplayStreet1.className = ('minicard p');
        let myStreet = (theResponse[i].street);
        theDisplayStreet1.innerText = myStreet;
        let theDisplayCity1 = document.createElement('p');
        theDisplayCity1.className = ('minicard p');
        let myCity = (theResponse[i].city);
        theDisplayCity1.innerText = myCity;
        let theDisplayState1 = document.createElement('p');
        theDisplayState1.className = ('minicard p');
        let myState = (theResponse[i].state);
        theDisplayState1.innerText = myState;
        theCard.append(theMiniCard);
        theMiniCard.append(a, theDisplayStreet1, theDisplayCity1, theDisplayState1);
    }
}

GetData();

theSpButton.addEventListener("click", function(event){
    event.preventDefault();
    console.log(theCard);
    while (theCard.firstChild){
        theCard.removeChild(theCard.lastChild);
    }
    spBrewery = theCurrentName.value;
    theURL = `https://api.openbrewerydb.org/breweries?by_name=${spBrewery}`
    GetData();
})

theCityStateButton.addEventListener("click", function(event){
    event.preventDefault();
    while (theCard.firstChild){
        theCard.removeChild(theCard.lastChild);
    }
    city = theCurrentCity.value;
    state = theCurrentState.value;
    theURL =`https://api.openbrewerydb.org/breweries?by_city=${city}&by_state${state}&per_page=30`
    GetData();
})

theLargeSpButton.addEventListener("click", function(event){
    event.preventDefault();
    spBrewery = theLargeCurrentName.value;
    theURL = `https://api.openbrewerydb.org/breweries?by_name=${spBrewery}`
    GetData();
    theSmall.style.display = "flex";
    theLarge.style.display = "none";
})

theLargeCityStateButton.addEventListener("click", function(event){
    event.preventDefault();
    city = theLargeCurrentCity.value;
    state = theLargeCurrentState.value;
    theURL =`https://api.openbrewerydb.org/breweries?by_city=${city}&by_state${state}&per_page=30`
    GetData();
    theSmall.style.display = "flex";
    theLarge.style.display = "none";
})

