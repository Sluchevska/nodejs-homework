const { User } = require('../../models')

const logout = async(req, res) => {
  const { _id } = req.user
  const { email } = req.body
  await User.findByIdAndUpdate(_id, { token: null })
  res.status(204).json({
    user: {
      email,

    },
  })
}

module.exports = logout
