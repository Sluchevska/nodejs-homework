const express = require('express')
const cors = require('cors')

const logger = require('morgan')
const app = express()
require('dotenv').config()
const sgMail = require('@sendgrid/mail')
const { SENDGRID_API_KEY } = process.env
sgMail.setApiKey(SENDGRID_API_KEY)

const contactsRouter = require('./routes/api/contacts')

const authRouter = require('./routes/api/auth')

const usersRouter = require('./routes/api/users')

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/users', authRouter)

app.use('/api/contacts', contactsRouter)

app.use('/api/users', usersRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})

const email = {
  to: 'nexig82092@videour.com',
  from: 'alaska.astr@gmail.com',
  subject: 'News',
  html: '<p>Good news</p>'
}

sgMail.send(email)
  .then(() => console.log('Email send success'))
  .catch(error => console.log(error.message))

module.exports = app
