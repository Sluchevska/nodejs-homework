const { Conflict } = require('http-errors')
const { User } = require('../../models')

const { nanoid } = require('nanoid')

const { sendEmail } = require('../../helpers')

const gravatar = require('gravatar')

const register = async (req, res) => {
  const { name, email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict('Email in use')
  }

  const verificationToken = nanoid()

  const avatarURL = gravatar.url(email)
  const newUser = new User({ name, email, avatarURL, verificationToken })

  newUser.setPassword(password)
  const { subscription } = await newUser.save()

  await newUser.save()
  const mail = {
    to: email,
    subject: 'Email verification',
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Verify email</a>`,
  }

  await sendEmail(mail)

  res.status(201).json({
    user: {
      email,
      subscription,

      verificationToken,

      avatarURL

    },
  })
}

module.exports = register
