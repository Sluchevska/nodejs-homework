const { Contact } = require('../../model')

const addContact = async (req, res) => {
  const result = await Contact.create(req.body)
  res.status(201).json({
    status: 'successfully created',
    code: 201,
    result,
  })
}

module.exports = addContact
