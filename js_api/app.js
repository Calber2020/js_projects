// const { default: axios } = require("axios");

// const { default: axios } = require("axios");

// const fetchBitcoinPrice = async () => {
//     try {
//         const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//         console.log(res.data.ticker.price)
//     }   catch(e) {
//         console.log("ERROR!", err)
//     }
// }
// const jokes = document.querySelector('#jokes');
// const getDadJoke = async () => {
//     const config = { headers: { Accept: 'application/json'} }
//     const res = await axios.get('https://icanhazdadjoke.com/', config)
//     const newLI = document.createElement('LI');
//     newLI.append(res.data.joke);
//     jokes.append(newLI)
// }

const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
    const img = document.createElement('IMG');
    img.src = res.data[0].show.image.medium;
    document.body.append(img)
})
