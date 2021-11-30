const { Conflict } = require('http-errors')
const { User } = require('../../models')
const bcrypt = require('bcryptjs')

const register = async (req, res) => {
  const { name, email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict('Email in use')
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  await User.create({ name, email, password: hashPassword })

  res.status(201).json({
    user: {
      email,
      subscription: 'starter'
    }

  })
}

module.exports = register
