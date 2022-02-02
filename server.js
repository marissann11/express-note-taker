const express = require("express");
const routes = require("./routes")

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use(routes)

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });