const express = require('express')

const { auth, controllerWrapper, validator } = require('../../middlewares')
const { users: ctrl } = require('../../controllers')
const { subscriptionJoiSchema } = require('../../models/users')

const router = express.Router()

router.get('/current', auth, controllerWrapper(ctrl.getCurrent))
router.patch('/:contactId', auth, validator(subscriptionJoiSchema), controllerWrapper(ctrl.updateSubscription))
router.get('/verify/:verificationToken', controllerWrapper(ctrl.verifyEmail))
router.post('/verify', controllerWrapper(ctrl.repeatVerification))
module.exports = router
