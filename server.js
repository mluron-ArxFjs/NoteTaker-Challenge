
const express = require('express');
const path = require('path');
const api = require("./routes/index.js");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
 
// Middleware for notes routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

// Get route for static index page and notes page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

//Listener    
app.listen(PORT, () =>
  console.log(`NoteApp is Up & listening on http://localhost:${PORT} 🚀`)
);
