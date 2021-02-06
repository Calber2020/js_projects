

// const container = document.querySelector('#container');
// const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';


// for (let i = 1; i <= 152; i++) {
//     const pokemon = document.createElement('div');
//     pokemon.classList.add('pokemon');
//     const label = document.createElement('span');
//     label.innerText = `#${i}`;
//     const newImg = document.createElement('img');
//     newImg.src = `${baseURL}${i}.png`

//     pokemon.appendChild(newImg);
//     pokemon.appendChild(label);
//     container.appendChild(pokemon);
// }

// Used for deployment of repeating images with descriptions

// const button = document.querySelector('button');
// const h1 = document.querySelector('h1');

// button.addEventListener('click', function() {
//     const newColor = makeRandColor();
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor;
// })

// const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;
// }

// Used for inserting random or events