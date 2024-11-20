# Frontend Mentor - Recipe page solution

This is a solution to the [Recipe page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/dimitrisdr/rest-countries-api.git)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css

.loading-comp {
    display: grid;
    place-items: center;
    width: 10rem;
    aspect-ratio: 1;
    border-radius: 50%;
    margin-inline: auto;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    font-size: 1.2rem;
    letter-spacing: 2px;
}

.loading-comp::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    z-index: -1;
    box-shadow: 0px 3px 1px rgb(55, 98, 226);
    animation: spiner 2s linear infinite;
}

```
```js
import { Link } from "react-router-dom";
import DataTable from "./DataTable";
export default function Card({countryData}) {


    const dataStructure = [
        {Population: new Intl.NumberFormat('de-DE').format(countryData.population)},
        {region: countryData.region},
        {Capital: countryData.capital}
    ]
    
    return (
        <Link className="link" to={`/countries/${countryData.name.common}`} state={{data: countryData}}>

            <div className="card">
                <img src={countryData.flags.svg} className="img flag-img" />
                <div className="country-info">
                    <h2 className="title country-info__title fw-800 fs-500">{countryData.name.common}</h2>
                    <DataTable data={dataStructure} /> 
                </div>
            </div>

        </Link>
    )
};
```

## Author

- Frontend Mentor - [@dimitrisdr](https://www.frontendmentor.io/profile/dimitrisdr)