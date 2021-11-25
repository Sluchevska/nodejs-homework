const express = require('express')
const router = express.Router()
const { controllerWrapper, validator } = require('../../middlewares')
const { contactsSchema } = require('../../schemas')
// const { contacts: ctrl } = require('../../controllers')
const getAll = require('../../controllers/contacts/getAll')
const add = require('../../controllers/contacts/add')

router.get('/', controllerWrapper(getAll))
// router.get('/:contactId', controllerWrapper(ctrl.getContactById))

router.post('/', controllerWrapper(add))

// router.delete('/:contactId', controllerWrapper(ctrl.removeContactById))

// router.put(
//   '/:contactId',
//   validator(contactsSchema),
//   controllerWrapper(ctrl.updateContactById)
// )

module.exports = router
