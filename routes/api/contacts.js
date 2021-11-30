const express = require('express')
const router = express.Router()
const { controllerWrapper, validator } = require('../../middlewares')
const { joiSchema, statusJoiSchema } = require('../../models/contacts')
const { contacts: ctrl } = require('../../controllers')

router.get('/', controllerWrapper(ctrl.getAll))

router.get('/:contactId', controllerWrapper(ctrl.getById))

router.post('/', validator(joiSchema), controllerWrapper(ctrl.add))

router.put(
  '/:contactId',
  validator(joiSchema),
  controllerWrapper(ctrl.updateById)
)

router.patch(
  '/:contactId/favorite',
  validator(statusJoiSchema),
  controllerWrapper(ctrl.updateStatus)
)

router.delete('/:contactId', controllerWrapper(ctrl.removeById))

module.exports = router
