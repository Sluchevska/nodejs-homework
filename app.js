const express = require('express')
const cors = require('cors')

const logger = require('morgan')
const app = express()

require('dotenv').config()

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

const multer = require('multer')
const path = require('path')
const fs = require('fs/promises')
const { v4 } = require('uuid')
const tempDir = path.join(__dirname, 'temp')
const uploadDir = path.join(__dirname, 'public', 'avatars')


const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
  limits: {
    fileSize: 2048
  }
})

const upload = multer({
  storage: multerConfig
})

const avatars = []

app.post('/api/avatars', upload.single('image'), async (req, res) => {
  console.log(req.file)
  const { path: tempUpload, originalname } = req.file
  const resultUpload = path.join(uploadDir, originalname)
  try {
    await fs.rename(tempUpload, resultUpload)
    const image = path.join('products', originalname)
    const newAvatar = {
      name: req.body.name,
      id: v4(),
      image
    }
    avatars.push(newAvatar)

    res.status(201).json(newAvatar)
  } catch (error) {
    await fs.unlink(tempUpload)
  }
})

module.exports = app
