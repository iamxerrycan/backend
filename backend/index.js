const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors")

dotenv.config();

const app = express();
// const PORT = process.env.PORT || 4000; // Use process.env.PORT or default to 4000

// cors.

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("hellonode");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, name: "first", title: "first title" },
    { id: 2, name: "2nd", title: "2nd title" },
    { id: 3, name: "3rd", title: "3rd title" },
  ];
  res.send(jokes);
});

// app.get('/insta', (req, res) => {
//     res.send('<h1>kittua</h1>');
// });

// app.get('/something', (req, res) => {
//     res.send(`<h1>html in chrome !</h1>`);
// });

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
}); 
