const express = require('express')
const router = express.Router()
const { controllerWrapper, validator } = require('../../middlewares')
const { auth: ctrl } = require('../../controllers')
const { joiRegisterSchema, joiLoginSchema } = require('../../models/users')

router.post('/signup', validator(joiRegisterSchema), controllerWrapper(ctrl.register))

module.exports = router
