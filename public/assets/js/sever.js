var express = require('express');
var router = express.Router();
app.get('/notes', function (req, res) {
  res.send('GET request to the notes.html')})
  app.get('/*', function (req, res) {
    res.send('GET request to the index.html')})



    const fs = require('fs')
    fs.store(db.json)
    fs.renderActiveNote (db.json)