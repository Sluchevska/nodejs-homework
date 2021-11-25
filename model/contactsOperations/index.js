const listContacts = require('./listContacts')
const getContactById = require('./getContactById')
const addContact = require('./addContact')
const removeContact = require('./removeContact')
const updateContactById = require('./updateContactById')
const Contact = require('./contacts')

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContactById,
  Contact
}
