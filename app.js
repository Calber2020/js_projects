

const container = document.querySelector('#container');



for (let i = 1; i < 10; i++) {
    const newImg = document.createElement('img');
    newImg.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'
    container.appendChild(newImg)
}