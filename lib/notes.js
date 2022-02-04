module.exports = findById = (id, db) => {
    const result = db.filter((note) => note.id === id)[0];
    return result;
  }