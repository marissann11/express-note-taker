const router = require('express').Router();
const uuid = require('uuid');
const fs = require('fs');
const db = require('../../db/db.json');

router.get('/notes', (req, res) => {
    res.json(db);
})

router.post('/notes', (req, res) => {
    const {title, text} = req.body;
    const id = uuid.v4();
    const newNote = {title, text, id};
    db.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db))
    res.json(db);
})

module.exports = router;