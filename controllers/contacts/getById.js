const { NotFound } = require('http-errors')
const { Contact } = require('../../models')

const getById = async (req, res) => {
  const { contactId } = req.params
  const contact = await Contact.findById(contactId)
  if (!contact) {
    throw new NotFound(`Product with id=${contactId} not found`)
  }

  res.json({
    status: 'success',
    code: 200,
    contact,

  })
}

module.exports = getById
