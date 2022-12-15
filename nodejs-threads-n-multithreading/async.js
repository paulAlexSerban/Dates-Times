const https = require("https");
const start = Date.now();

const doRequest = () => {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(`duration -> ${(Date.now() - start) / 1000} ms`);
      });
    })
    .end();
};

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();

/**
 * all requests seem to be done almost simultaneously, that is because NodeJS calls the LibUV https
 * function which then delegates the calls to the underlying OS, as not NodeJS or LibUV
 * has any code to understand network Requests
 */
