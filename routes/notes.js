const notes = require("express").Router();
const uuid = require("short-uuid");
const fs = require('fs');


// GET route for showing the notes
notes.get("/", (req, res) => {
  fs.readFile("./db/db.json", (err, json) => {
    if (err) throw err;
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

// POST route for saving a new note
// Create New Note and save it in db/db.json file
notes.post("/", (req, res) => {

  // Destructuring to get title and text
  const { title, text } = req.body;

  const newNote = {
    title,
    text,
    //Generate Unique ID with short-uuid
    id: uuid.generate(),
  };

  fs.readFile("./db/db.json", (err, data) => {
    if (err) throw err;
    let dbData = JSON.parse(data);

    //add the new note to the notes array
    dbData.push(newNote);
    // Convert the data to a string so we can save it
    notePackage = JSON.stringify(dbData);

    //write in the file using the new array of objects
    let file_path = "./db/db.json";
    fs.writeFile(file_path, notePackage, err => {
      if (err) throw err;
      const response = {
        status: 'sucess',
        body: newNote,
      };
      res.json(response);
    });
  });
});

// DELETE route for deleting a note
notes.delete("/:id", async (req, res) => {

  fs.readFile("./db/db.json", (err, data) => {
    if (err) throw err;
    const dbData = JSON.parse(data);

    // Go through notes, to match and then splice the one selected to be deleted
    // Copmpare ID of deleted note to notes in the db.json file
    let delNotes = dbData.filter(note => note.id !== req.params.id);

    // Convert the data to a string so we can save it
    const notetoDelete = JSON.stringify(delNotes);

    //write file using the new array of objects
    fs.writeFile(`./db/db.json`, notetoDelete, (err) => {
      if (err) throw err;
      res.json("note deleted successfully")
    });

  });

});

module.exports = notes;
