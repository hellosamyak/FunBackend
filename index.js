require('dotenv').config()
const express = require('express') // or import express from "express";
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.send('Please log in to continue...')
})

app.get('/about', (req, res) => {
  res.send('<h1>I am Samyak, the man behind this server.</h1>')
})

app.listen(process.env.PORT, () => {
  console.log("Example app listening on port", process.env.PORT)
})
