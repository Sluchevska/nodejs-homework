const { Contact } = require('../../model')

// const updateById = async (req, res) => {
//   const { contactId } = req.params
//   const result = await contactsOperations.updateContactById(contactId, req.body)
//   // console.log(result)
//   if (!result) {
//     res.status(404).json({
//       status: 'error',
//       code: 404,
//       message: `Contact with id ${contactId} not found`,
//     })
//     return
//   }
//   res.json({
//     status: 'successfuly updated',
//     code: 200,
//     result
//   })
// }

// module.exports = updateById