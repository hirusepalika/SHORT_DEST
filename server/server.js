// imports
const express = require('express');
const cors = require('cors'); // allows us to control which domains can access our resources in node js package = site security
const shortId = require('shortid'); // url shortener package
const bodyParser = require('body-parser');

// create application using express JS
const app = express();
app.use(cors({
    credentials:true,
    origin: ['http://localhost:3000']
}));

app.use(bodyParser.json());

// URL shortner api
app.post('/shorten', (_, res) => {
    const short = shortId.generate();
    res.json({shortURL: short});
});

// message endpoint - GET route
app.get('/message', (_, res) => {
    res.json({ message: "Hello from server!" });
});




const urls = {};

app.get('/shorty', (req, res) => {
  const url = req.query.url;
  const id = shortId.generate();

  urls[id] = url;

  res.send(`http://localhost:3000/${id}`);
});

app.get('/:id', (req, res) => {
  const id = req.params.id;
  const url = urls[id];

  if (url) {
    res.redirect(url);
  } else {
    res.sendStatus(404);
  }
});

// expose port 8000 to run the back-end server
app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});


