# NoteTaker-Challenge

## Table of Contents
- [Description](#project-description)
- [Tech Used](#tech-used)
- [Demo](#demo)
- [NPM Packages](#npm-packages)
- [Installation](#installation)
- [Contact me](#Contact)

## Description
This application uses an express backend, saving and retrieving JSON stored data. This NoteTaker App will allow anyone to title and write extensive notes and keep track of tasks, then save them for later reading or deletion. 

### Tech Used

HTML routes were created:</br>
GET /notes - return the notes.html file.
GET * - return the index.html file

db.json file on the backend is used to store and retrieve notes using the fs module.

API routes were created in index.js and notes.js:</br>
GET /api/notes reads db.json file and returns all saved notes as JSON.</br>
POST /api/notes receives a new note to save on the request body, adds it to the db.json file, and then returns the new note to the client.</br>
DELETE /api/notes/:id receives a query parameter containing the id of a note to delete. Each note is given a unique id when it’s saved.

### Demo & link to the deployed NoteTaker App 
[Go to Demo](https://drive.google.com/file/d/1WTtMB1rYNYX9rtG0lRbGAb3I9oU9dXUY/view?usp=sharing)
[Try it here](https://notetaker-challenge-04b3eb2c464f.herokuapp.com/notes)
#### NPM Packages
npm install Express
npm install short-uuid

## Installation 
- To install this project into your own, use `git clone` in your command-line.
- To use this repo, go to the cloned files, then 'download the npm packages'
- Be sure you’re in the correct location in your command-line/terminal, then type `node server` in your command-line.

## Screenshots
-![Screenshot](./public/assets/images/Note%20Taker.png)

## Contact me
- [GitHub](https://github.com/mluron-ArxFjs)

- ![](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)mluron2@gmail.com
