const register = require('./register')
const login = require('./login')
const avatar = require('./updateAvatar')
const getCurrent = require('./getCurrent')
const updateSubscription = require('./updateSubscription')
const logout = require('./logout')
const verifyEmail = require('./verifyEmail')
const repeatVerification = require('./repeatVerification')

module.exports = {
  register,
  login,
  logout,
  avatar,
  getCurrent,
  updateSubscription,
  verifyEmail,
  repeatVerification
}
