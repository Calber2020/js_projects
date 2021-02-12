const franc = require('franc');
const langs = require('langs');
const langCode = franc('alles gut');

const language = langs.where('3', langCode);
console.log(language.name)
