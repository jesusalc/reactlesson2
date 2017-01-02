const express = require('express')
const make_html = require('./app_template')

const app = express()
const html = make_html()


app.use(express.static('public'))

app.get('/api/init', function(req, res) {
  res.status(200).json([[0,0,0],[0,0,0],[0,0,0]]);
})

app.get('*', function(req, res) {
  res.send(html)
})

const port = 3000 
app.listen(port, function () {
  console.log(`Example app listening on http://localhost:${port}/ !`)
})

module.exports.app = app