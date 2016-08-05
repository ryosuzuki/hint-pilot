const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()

app.use(express.static(__dirname + '/dist'))
app.use('/src', express.static(__dirname + '/src'))
app.use('/bower_components', express.static(__dirname + '/bower_components'))

app.set('view engine', 'ejs')
app.use('/:id', function (req, res) {
  const code = fs.readFileSync('./data/001.py')
  const hint = JSON.parse(fs.readFileSync('./data/001.json'))
  const question = fs.readFileSync('./data/questions/repeated.py')
  res.render('index', { code: code, hint: hint, question: question })
})
app.use('/', function (req, res) {
  const code = fs.readFileSync('./data/001.py')
  const hint = JSON.parse(fs.readFileSync('./data/001.json'))
  const question = fs.readFileSync('./data/questions/repeated.py')
  res.render('index', { code: code, hint: hint, question: question })
})

const port = 3000

app.listen(port, function(error) {
  if (error) throw error
  console.log('Express server listening on port', port)
})
