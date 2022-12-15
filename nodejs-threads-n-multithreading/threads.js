
/**
 * Changing the number of thread in the thread pool
 *
 * process.env.UV_THREADPOOL_SIZE = default is 4
 *
 * WARNING
 * never set UV_THREADPOOL_SIZE to a number bigger than the amount of core processors you have as this will increase the context switching thus impacting the performance of your app
 *
 * NOTE
 * for a more accurate thread pool size setup, it is better to always set the variable before the process starts in command line or bash
 */
// process.env.UV_THREADPOOL_SIZE = 6;

const OS = require('os');
const cpuLength = OS.cpus().length;
process.env.UV_THREADPOOL_SIZE = cpuLength;




const crypto = require("crypto");
let thread = 0;
// start of the program
const start = Date.now();

// all function calls will be called at the same time
// thread pool 1
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  thread++;
  console.log(`thread ${thread} -> start: ${start} | duration: ${(Date.now() - start) / 1000}`);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  thread++;
    console.log(`thread ${thread} -> start: ${start} | duration: ${(Date.now() - start) / 1000}`);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  thread++;
    console.log(`thread ${thread} -> start: ${start} | duration: ${(Date.now() - start) / 1000}`);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  thread++;
    console.log(`thread ${thread} -> start: ${start} | duration: ${(Date.now() - start) / 1000}`);
});

// thread pool 2
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  thread++;
  console.log(`thread ${thread} -> start: ${start} | duration: ${(Date.now() - start) / 1000}`);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  thread++;
    console.log(`thread ${thread} -> start: ${start} | duration: ${(Date.now() - start) / 1000}`);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  thread++;
    console.log(`thread ${thread} -> start: ${start} | duration: ${(Date.now() - start) / 1000}`);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  thread++;
    console.log(`thread ${thread} -> start: ${start} | duration: ${(Date.now() - start) / 1000}`);
});

// thread pool 3
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  thread++;
  console.log(`thread ${thread} -> start: ${start} | duration: ${(Date.now() - start) / 1000}`);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  thread++;
    console.log(`thread ${thread} -> start: ${start} | duration: ${(Date.now() - start) / 1000}`);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  thread++;
    console.log(`thread ${thread} -> start: ${start} | duration: ${(Date.now() - start) / 1000}`);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  thread++;
    console.log(`thread ${thread} -> start: ${start} | duration: ${(Date.now() - start) / 1000}`);
});

// thread pool 4
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  thread++;
  console.log(`thread ${thread} -> start: ${start} | duration: ${(Date.now() - start) / 1000}`);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  thread++;
    console.log(`thread ${thread} -> start: ${start} | duration: ${(Date.now() - start) / 1000}`);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  thread++;
    console.log(`thread ${thread} -> start: ${start} | duration: ${(Date.now() - start) / 1000}`);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  thread++;
    console.log(`thread ${thread} -> start: ${start} | duration: ${(Date.now() - start) / 1000}`);
});