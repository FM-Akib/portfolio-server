import Certificate from '../models/certificateSchema.js';
import { certificateValidationSchema } from '../validation/certificate.validation.js';

// Create
export const createCertificate = async (req, res) => {
  try {
    const data = certificateValidationSchema.parse(req.body);
    const certificate = new Certificate(data);
    await certificate.save();
    res.status(201).json({ message: 'Certificate created', data: certificate });
  } catch (err) {
    if (err.name === 'ZodError') {
      return res.status(400).json({ errors: err.errors });
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get All
export const getAllCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find().sort({ date: -1 });
    res.json({ data: certificates });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get One
export const getCertificateById = async (req, res) => {
  try {
    const certificate = await Certificate.findById(req.params.id);
    if (!certificate) {
      return res.status(404).json({ message: 'Certificate not found' });
    }
    res.json({ data: certificate });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update
export const updateCertificate = async (req, res) => {
  try {
    const data = certificateValidationSchema.parse(req.body);
    const updated = await Certificate.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    if (!updated) {
      return res.status(404).json({ message: 'Certificate not found' });
    }
    res.json({ message: 'Certificate updated', data: updated });
  } catch (err) {
    if (err.name === 'ZodError') {
      return res.status(400).json({ errors: err.errors });
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete
export const deleteCertificate = async (req, res) => {
  try {
    const deleted = await Certificate.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Certificate not found' });
    }
    res.json({ message: 'Certificate deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
