const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const marked = require('marked')

app.use(express.static(__dirname + '/dist'))
app.use('/src', express.static(__dirname + '/src'))
app.use('/bower_components', express.static(__dirname + '/bower_components'))

app.set('view engine', 'ejs')
app.use('/:id', function (req, res) {
  const id = req.params.id

  var str = '' + id
  var pad = '000'
  var uid = pad.substring(0, pad.length - str.length) + str

  const code = fs.readFileSync('./data/'+uid+'.py')
  const hint = JSON.parse(fs.readFileSync('./data/'+uid+'.json'))
  var markdown = fs.readFileSync('./data/questions/'+hint.category+'.md', 'utf8')
  var question = marked(markdown)
  res.render('index', { code: code, hint: hint, question: question })
})
app.use('/', function (req, res) {
  const code = fs.readFileSync('./data/code-001.py')
  const hint = JSON.parse(fs.readFileSync('./data/hints-001.json'))
  const question = fs.readFileSync('./data/questions/repeated.py')
  res.render('index', { code: code, hint: hint, question: question })
})

const port = 3000

app.listen(port, function(error) {
  if (error) throw error
  console.log('Express server listening on port', port)
})
