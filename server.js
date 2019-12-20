const
  express = require('express'),
  serveStatic = require('serve-static'),
  history = require('connect-history-api-fallback'),
  path = require('path'),
  port = process.env.PORT || 5000,
  bodyParser = require('body-parser'),
  mongoose = require('mongoose')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
}

const app = express()

app.use(bodyParser.json())

mongoose.connect(process.env.dbURI, { useNewUrlParser: true }, () => {
  console.log('Connected to MongoDB')
})

app.use(history())
app.use(serveStatic(path.join(__dirname, '/dist/spa')))
app.listen(port)
