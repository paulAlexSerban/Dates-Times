const fs = require("fs");

fs.readFile("./text.txt", "utf8", (err, data) => {
  fs.readFile(`./${data}.txt`, "utf8", (err, dataTwo) => {
    console.log(dataTwo);
    fs.writeFile(`./outText.txt`, `${data}\n${dataTwo}`, "utf8", (err) => {
      if (err) console.log(err);
    });
  });
});

console.log("will read file");
