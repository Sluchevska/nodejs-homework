const express = require('express')
const router = express.Router()
const { auth, controllerWrapper, validator, upload } = require('../../middlewares')
const { auth: ctrl } = require('../../controllers')
const { joiRegisterSchema, joiLoginSchema } = require('../../models/users')

router.post('/signup', validator(joiRegisterSchema), controllerWrapper(ctrl.register))
router.post('/login', validator(joiLoginSchema), controllerWrapper(ctrl.login))
router.get('/logout', auth, controllerWrapper(ctrl.logout))
// router.patch('/avatar', auth, upload.single('avatar'), controllerWrapper(ctrl.avatars))

module.exports = router
