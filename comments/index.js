const cors = require('cors');
const axios = require('axios');
const express = require('express');
const {randomBytes} = require('crypto');
const bodyParser = require('body-parser');


const app = express()

app.use(bodyParser.json())
app.use(cors())

const commentsByPostId = {}

app.post('/posts/:id/comments', async(req, res) => {
  const commentId = randomBytes(4).toString('hex')
  const { content } = req.body
  const comments = commentsByPostId[req.params.id] || []

  comments.push({id: commentId, content})
  commentsByPostId[req.params.id] = comments

  await axios.post('http://localhost:4005/events', {type:'commented created', data: {id: commentId, content, postId: req.params.id} })


  res.status(201).send(commentsByPostId[req.params.id])
  
}) 
app.get('/posts/:id/comments', (req, res) => {
  res.status(200).send(commentsByPostId[req.params.id])
}) 

app.post('/events', (req, res) => {
  console.log('Evento recebido', req.body)
  res.status(200)
})

app.listen(4001, () => {
  console.log('Listening on 4001')
})
