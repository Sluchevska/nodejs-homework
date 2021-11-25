const { Schema, model } = require('mongoose')
const Joi = require('joi')
const contactSchema = Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },

}, { versionKey: false, timestamps: true })

const Contact = model('contact', contactSchema)

const joiSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  phone: Joi.string()
    .pattern(/[0-9]/)
    .required(),
  favorite: Joi.boolean().valid(false).required(),
})

module.exports = { Contact, joiSchema }
