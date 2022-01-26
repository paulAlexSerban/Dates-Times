const franc = require('franc');
const langs = require('langs');
const input = process.argv[2];

const langCode = franc(input);

if(langCode === "und") {
  console.log('SORRY! Could not figure it out, try with more sample text.');
} else {
  const language = langs.where("3", langCode);
  console.log(language.local);
}

// `$ node index.js 'my firend do not come to the party'`
