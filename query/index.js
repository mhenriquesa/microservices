const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  console.log('Evento rescebido', req.body);
  res.status(200);
});

app.listen(4002, () => {
  console.log('Listening on 4002');
});
