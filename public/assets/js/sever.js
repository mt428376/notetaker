var express = require('express');
var router = express.Router();
app.get('/notes', function (req, res) {
  res.send('GET return to the notes.html')})

  app.get('/api/notes', function (req, res) {
    res.send('GET return to the db.json')})

    app.post('/api/notes', function (req, res) {
        res.send('POST request and receive then add then return to the db.json')})

  app.get('/*', function (req, res) {
    res.send('GET return to the index.html')})

    app.delete('/api/notes/:id', function (req, res) {
        res.send('DELETE return to the db.json')})
    



    const fs = require('fs')
    fs.store(db.json)
    fs.renderActiveNote (db.json)
