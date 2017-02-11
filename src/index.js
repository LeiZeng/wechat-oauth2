import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

import { wxAuth, wxCallback } from './wx'

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
