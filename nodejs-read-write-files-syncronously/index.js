const fs = require("fs");

const textIn = fs.readFileSync("./text.txt", "utf8");
const textOut = `this is what we have in text.txt :::> ${textIn} on ${Date.now()}`;
console.log(textOut);
fs.writeFileSync("./out-text.txt", textOut);
