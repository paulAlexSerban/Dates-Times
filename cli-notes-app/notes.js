const fs = require("fs");
const chalk = require("chalk");

const addNotes = (title = "", body = "") => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  debugger;
  if (!duplicateNote) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log("New note added!");
  } else {
    console.log("Note title taken!");
  }
};

const removeNote = (title = "") => {
  const notes = loadNotes();
  // filter and keep the notes for which the title is not equal with the one passded as param
  const notesToKeep = notes.filter((note) => note.title !== title);
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No note found"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your notes"));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title = "") => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("No note found"));
  }
};

const saveNotes = (notes = []) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

module.exports = {
  addNotes,
  removeNote,
  listNotes,
  readNote,
};
