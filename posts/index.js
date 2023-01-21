const { randomBytes } = require('crypto');
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', async (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  // await axios.post('http://localhost:4005/events', {
  //   type: 'Post Created',
  //   data: { id, title },
  // });

  res.status(201).send(posts[id]);
});

app.post('/events', (req, res) => {
  console.log('Evento rescebido', req.body);
  res.status(200);
});

app.listen(4000, () => {
  console.log('Listening on 4000');
});
