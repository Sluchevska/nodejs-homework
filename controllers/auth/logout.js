const { User } = require('../../models')
const { Unauthorized } = require('http-errors')

const logout = async(req, res) => {
  const { _id } = req.user
  const { email } = req.body
  const user = await User.findByIdAndUpdate(_id, { token: null })
  if (!user) {
    throw new Unauthorized('Not authorized')
  }
  res.status(204).json({
    user: {
      email,

    },
  })
}

module.exports = logout
