import ContactDetails from '../models/contactDetailsSchema.js';
import { contactDetailsValidationSchema } from '../validation/contactDetails.validation.js';

// Create
export const createContactDetails = async (req, res) => {
  try {
    const data = contactDetailsValidationSchema.parse(req.body);
    const contact = new ContactDetails(data);
    await contact.save();
    res.status(201).json({ message: 'Contact details created', data: contact });
  } catch (err) {
    if (err.name === 'ZodError') {
      return res.status(400).json({ errors: err.errors });
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get All
export const getAllContactDetails = async (req, res) => {
  try {
    const contacts = await ContactDetails.find();
    res.json({ data: contacts });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get One
export const getContactDetailsById = async (req, res) => {
  try {
    const contact = await ContactDetails.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.json({ data: contact });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update
export const updateContactDetails = async (req, res) => {
  try {
    const data = contactDetailsValidationSchema.parse(req.body);
    const updated = await ContactDetails.findByIdAndUpdate(
      req.params.id,
      data,
      { new: true },
    );
    if (!updated) return res.status(404).json({ message: 'Contact not found' });
    res.json({ message: 'Contact updated', data: updated });
  } catch (err) {
    if (err.name === 'ZodError') {
      return res.status(400).json({ errors: err.errors });
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete
export const deleteContactDetails = async (req, res) => {
  try {
    const deleted = await ContactDetails.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Contact not found' });
    res.json({ message: 'Contact deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
