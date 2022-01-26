const http = require("http"),
  querystring = require("querystring"),
  fs = require("fs"),
  path = require("path"),
  url = require("url");

const config = {
  port: 4000,
  directory: path.resolve(__dirname, "../database/documents"),
};

/**
 * Rudimentary URL sanitizer with RegExp
 * NOTA-BENE: a verified and more stable library should be used
 */
const invalidFileRegexPattern = /^[\./\\]\.\./; /* 1 */

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    handlePost(req, res);
    return;
  }

  let query = url.parse(req.url, true).query;

  if (query.file) {
    writeFile(req, res, query);
    return;
  }

  writeIndex(req, res);
});

/**
 * writeIndex
 * - receives the list of available files and lists them
 */
const writeIndex = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  fs.readdir(config.directory, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    let fileListHTML = "";

    for (let file of files) {
      fileListHTML += `<li><a href="?file=${file}">${file}</a></li>`;
    }

    res.end(`
     <ul>
      ${fileListHTML}
     </ul>
     <form method="post">
      <input type="text" name='file' />
      <textarea name='text'></textarea>
      <input type='submit' />
     </form>
    `);
  });
};

/**
 * writeFile
 * - method that writes the HTML file using different other functions and methods
 */
const writeFile = (req, res, query) => {
  if (invalidFileRegexPattern.test(query.file)) {
    writeText(res, 400, "Invalid filename");
    return;
  }

  let filename = path.join(config.directory, query.file);
  fs.readFile(filename, (err, buffer) => {
    if (err) {
      writeText(res, 400, err);
      return;
    }

    writeText(res, 200, buffer.toString());
  });
};

/**
 * handlePost
 * - handles the POST methods requests
 * - creates a new file with the title and content received from the form
 */
const handlePost = (req, res) => {
  let body = "";
  req.on("data", (data) => {
    body += data;
  });

  req.on("end", () => {
    let form = querystring.parse(body);

    if (!form.file || invalidFileRegexPattern.test(form.file)) {
      writeText(res, 400, "Invalid path");
      return;
    }

    try {
      fs.writeFileSync(path.join(config.directory, form.file), form.text);
      writeIndex(req, res);
    } catch (e) {
      writeText(res, 400, "Could not save file!");
      console.error(e);
    }
  });
};

/**
 * writeText
 * - used to write text (messages or HTML) on the page
 */
const writeText = (res, status, text) => {
  res.writeHead(status, { "Content-Type": "text/plain" });
  res.end(text);
};

server.listen(config.port);
console.log(`Server is listening on ${config.port}`);
