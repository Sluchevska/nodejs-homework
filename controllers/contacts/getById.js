const { Contact } = require('../../model')

const getById = async (req, res) => {
  const { contactId } = req.params
  const contact = await Contact.findOne({ _id: contactId })
  if (!contact) {
    res.status(404).json({
      status: 'error',
      code: 404,
      message: `Contact with id ${contactId} not found`,
    })
    return
  }
  res.json({
    status: 'success',
    code: 200,
    contact,
  })
}

module.exports = getById
