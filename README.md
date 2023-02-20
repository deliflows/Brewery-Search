<p align="center">
  <a href="https://brewski-search.netlify.app/)" rel="" target="_blank"><img width="150" src="https://res.cloudinary.com/dexffe7jc/image/upload/v1676912072/brew_lifmmg.jpg" alt="BJJ Stars"></a></p>
</p>

<h1 align="center">b r e w</h1>
<h2 align="center">Find a Local Brewski</h2>

> Build Status:
Deployed@**[brew](https://brewski-search.netlify.app/)**

## What is  b r e w?
brew let's you search for any specific brewery or breweries near you. A list of all breweries populates with their website for easy access. This site utilizes API calls and many Javascript techniques.

## Inspiration
<p align="center">
<img width="250" border-radius="20px" src="https://res.cloudinary.com/dexffe7jc/image/upload/v1676913008/IMG_20211018_102804_824_mcni6a.jpg" alt="Betty Lee holding a beer">
</p>

<p align="center">The brewing community has been good to me. So I thought, "How can I give back to their community?"<p/>

## Quick Preview

<p align="center"><img src="https://media.giphy.com/media/nNnYmWkce5izxfDMJ8/giphy.gif" alt="View of Website"/></p>

## Features
- Search for a specific brewery
- Search for breweries an a specific city
- Populates full list, or just one brewery
- Link to brewery website

## Technical Framework Usage:
- JavaScript

## Code Framework Style
- Custom Styled Components

## Current Goals

- [x] Host the site on Netlify
- [ ] Widen search parameters
- [ ] Connect a map
- [ ] Save favorite breweries

## Challenges
- Time managing with less than two(2) weeks to complete. 
- Seamlessly connecting JavaScript file with HTML file.

## Triumphs
- Created site with 1-month of traning from Digital Crafts BootCamp
- Created an aesthetically pleasing while functional site
- Making an API call

## Code Example Extraction
Searching for a specifc brewery.
```
theSpButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(theCard);
  while (theCard.firstChild) {
    theCard.removeChild(theCard.lastChild);
  }
  spBrewery = theCurrentName.value;
  theURL = `https://api.openbrewerydb.org/breweries?by_name=${spBrewery}`;
  GetData();
});
```
Accreditation:
- Full-Stack Developer:[Betty Lee Carter](https://github.com/deliflows) Ideation, Front-End, Deployment, ReadMe-files.

## The End.
