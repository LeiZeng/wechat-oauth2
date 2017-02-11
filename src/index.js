import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

import wxAuth from './wx/authentication'
import wxCallback from './wx/callback'

const app = express()

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(wxAuth())
app.use(wxCallback())
app.use('/', (req, res, next) => {
  res.send('Home Page')
})

app.listen(8080, () => {
  console.log('Application start at 8080.')
})
