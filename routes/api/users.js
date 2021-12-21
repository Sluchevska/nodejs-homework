const express = require('express')

const { auth, controllerWrapper, validator, upload } = require('../../middlewares')
const { auth: ctrl } = require('../../controllers')
const { joiRegisterSchema, joiLoginSchema, subscriptionJoiSchema } = require('../../models/users')

const router = express.Router()

router.get('/current', auth, controllerWrapper(ctrl.getCurrent))
router.post('/signup', validator(joiRegisterSchema), controllerWrapper(ctrl.register))
router.post('/login', validator(joiLoginSchema), controllerWrapper(ctrl.login))
router.get('/logout', auth, controllerWrapper(ctrl.logout))
router.patch('/avatars', auth, upload.single('avatar'), controllerWrapper(ctrl.avatar))
router.patch('/:contactId', auth, validator(subscriptionJoiSchema), controllerWrapper(ctrl.updateSubscription))
router.get('/verify/:verificationToken', controllerWrapper(ctrl.verifyEmail))
router.post('/verify', controllerWrapper(ctrl.repeatVerification))

module.exports = router
