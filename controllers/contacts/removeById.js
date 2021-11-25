const { Contact } = require('../../model')

// const removeById = async (req, res) => {
//   const { contactId } = req.params
//   const contact = await contactsOperations.removeContact((contactId))
//   if (!contact) {
//     res.status(404).json({
//       status: 'error',
//       code: 404,
//       message: `Contact with id ${contactId} not found`,
//     })
//     return
//   }
//   res.json({
//     status: 'successfully deleted',
//     code: 200,
//   })
// }

// module.exports = removeById