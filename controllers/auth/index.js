const register = require('./register')
const login = require('./login')
const avatar = require('./updateAvatar')
const getCurrent = require('./getCurrent')
const updateSubscription = require('./updateSubscription')
const logout = require('./logout')

module.exports = {
  register,
  login,
  logout,
  avatar,
  getCurrent,
  updateSubscription
}
