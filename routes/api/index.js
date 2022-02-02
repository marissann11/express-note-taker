const router = require('express').Router();
const fs = require('fs');
const db = require('../../db/db.json');

router.get('/notes', (req, res) => {
    res.json(db);
})

router.post('/notes', (req, res) => {
    const {title, text} = req.body;
    const newNote = {title, text};
    db.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db))
    res.json(db);
})

module.exports = router;