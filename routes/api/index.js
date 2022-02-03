const router = require('express').Router();
const uuid = require('uuid');
const fs = require('fs');
const db = require('../../db/db.json');

router.get('/notes', (req, res) => {
    res.json(db);
});

router.post('/notes', (req, res) => {
    const {title, text} = req.body;
    let id = uuid.v4();
    const newNote = {title, text, id};
    db.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db))
    res.json(db);
});

// router.delete('./notes:id', (req, res) => {
//     let id = req.params.id
// })
// filter through and make array of all notes whose id's don't match id to be deleted, new array pushed to db?? 

module.exports = router;