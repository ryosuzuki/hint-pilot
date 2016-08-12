const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const marked = require('marked')
const _ = require('lodash')
const favicon = require('serve-favicon')

app.use(favicon(__dirname + '/src/favicon.ico'))
app.use(express.static(__dirname + '/dist'))
app.use('/src', express.static(__dirname + '/src'))
app.use('/bower_components', express.static(__dirname + '/bower_components'))

app.set('view engine', 'ejs')
app.get('/:id', function (req, res) {
  const id = req.params.id

  var str = '' + id
  var pad = '000'
  var uid = pad.substring(0, pad.length - str.length) + str

  const code = fs.readFileSync('./data/'+uid+'.py')
  const hint = JSON.parse(fs.readFileSync('./data/'+uid+'.json'))

  var categories = [ 'location', 'type', 'syntax', 'name', 'data', 'behavior']
  var random = _.random(categories.length)
  var topic = categories[random]
  var markdown = fs.readFileSync('./data/questions/'+hint.category+'.md', 'utf8')
  var question = marked(markdown)
  res.render('index', { code: code, hint: hint, question: question, topic: topic })
})
app.get('/', function (req, res) {
  res.send('It works!')
})
app.post('/pre', function (req, res) {
  console.log(req)
})


const port = 3000

app.listen(port, function(error) {
  if (error) throw error
  console.log('Express server listening on port', port)
})
