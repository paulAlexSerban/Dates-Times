const fs = require("fs");

const books = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
};

const booksJSON = JSON.stringify(books);
console.log(booksJSON);

fs.writeFileSync("one-json.json", booksJSON);

const dataBuffer = fs.readFileSync("one-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

console.log(data.title);