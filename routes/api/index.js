const router = require("express").Router();
const uuid = require("uuid");
const fs = require("fs");
const db = require("../../db/db.json");
const findById = require("../../lib/notes.js")

router.get("/notes", (req, res) => {
  res.json(db);
});

router.post("/notes", (req, res) => {
  const { title, text } = req.body;
  let id = uuid.v4();
  const newNote = { title, text, id };
  db.push(newNote);
  fs.writeFileSync("db/db.json", JSON.stringify(db));
  res.json(db);
});

router.delete('/notes/:id', (req, res) => {
    const foundNote = findById(req.body.id, db)
    db.splice(foundNote, 1);
    fs.writeFileSync("db/db.json", JSON.stringify(db));
    res.json(db);
})

module.exports = router;