const fs = require("fs");

if (process.argv[2] === "readFile") {
  fs.promises
    .readFile("./text.txt", "utf8")
    .then((data) => {
      fs.readFile(`./${data}.txt`, "utf8", (err, dataTwo) => {
        console.log(dataTwo);
        fs.writeFile(`./outText.txt`, `${data}\n${dataTwo}`, "utf8", (err) => {
          if (err) console.log(err);
        });
      });
    })
    .catch((err) => console.log(err));
}

if (process.argv[2] === "deleteFile") {
  fs.promises
    .unlink("outText.txt")
    .then(console.log("file has been deleted successfully"))
    .catch((err) => console.log(err));
}

if (process.argv[2] === "copyFile") {
  fs.promises
    .copyFile("read-this.txt", "read-this_copy.txt", fs.constants.COPYFILE_EXCL)
    .then(() => console.log("file has been copied successfully"))
    .catch((err) => console.log(err));
}
if (process.argv[2] === "createDirectory") {
  fs.promises
    .mkdir("newDir/childFir", { recursive: true })
    .then(() => console.log("new directory created"))
    .catch((err) => console.log(err));
}

if (process.argv[2] === "deleteDirectory") {
  fs.promises
  .rmdir("newDir", { recursive: true })
  .then(() => console.log("directory removed"))
  .catch((err) => console.log(err));
}
 console.log(process.binding())