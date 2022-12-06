const notes = require("./notes.js");
const chalk = require("chalk");
const yargs = require("yargs");

// customize yargs version
yargs.version("1.0.1");

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note.",
  builder: {
    title: {
      describe: "Note title.",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body.",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addNotes(argv.title, argv.body);
  },
});

// create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note.",
  handler: (argv) => {
    console.log("Removing a note!", argv);
  },
});

// create list command
yargs.command({
  command: "list",
  describe: "List notes.",
  handler: (argv) => {
    console.log("Listing notes.", argv);
  },
});

// create read command
yargs.command({
  command: "read",
  describe: "Read a note.",
  handler: (argv) => {
    console.log("Reading notes.", argv);
  },
});

yargs.parse();
