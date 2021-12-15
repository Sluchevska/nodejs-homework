const { Conflict } = require('http-errors')
const { User } = require('../../models')
const gravatar = require('gravatar')

const register = async (req, res) => {
  const { name, email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict('Email in use')
  }
  const avatarURL = gravatar.url(email)
  const newUser = new User({ name, email, avatarURL })
  newUser.setPassword(password)
  const { subscription } = await newUser.save()

  res.status(201).json({
    user: {
      email,
      subscription,
      avatarURL
    },
  })
}

module.exports = register
