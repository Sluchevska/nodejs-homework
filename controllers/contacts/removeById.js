const { NotFound } = require('http-errors')
const { Contact } = require('../../models')

const removeById = async (req, res) => {
  const { contactId } = req.params
  const contact = await Contact.findByIdAndRemove((contactId))
  if (!contact) {
    throw new NotFound(`Product with id=${contactId} not found`)
  }
  res.json({
    status: 'successfully deleted',
    code: 200,
    message: 'contact deleted',
    data: {
      contact
    }
  })
}

module.exports = removeById
