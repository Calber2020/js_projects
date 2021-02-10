const { default: axios } = require("axios");

// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
// .then(res => {
//     console.log(res.data.ticker.price)
// })
// .catch(err => {
//     console.log("ERROR!", err)
// })

const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(res.data.ticker.price)
    }   catch(e) {
        console.log("ERROR!", err)
    }
}

const getDadJoke = async () => {
    const res = await axios.get('https://icanhazdadjoke.com/',)
    console.log(res)
}