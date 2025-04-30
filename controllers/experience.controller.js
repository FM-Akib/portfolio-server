import Experience from '../models/experienceSchema.js';
import { experienceValidationSchema } from '../validations/experience.validation.js';

// Create
export const createExperience = async (req, res) => {
  try {
    const data = experienceValidationSchema.parse(req.body);
    const experience = new Experience(data);
    await experience.save();
    res.status(201).json({ message: 'Experience created', data: experience });
  } catch (err) {
    if (err.name === 'ZodError') {
      return res.status(400).json({ errors: err.errors });
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get All
export const getAllExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ createdAt: -1 });
    res.json({ data: experiences });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get One
export const getExperienceById = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    res.json({ data: experience });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update
export const updateExperience = async (req, res) => {
  try {
    const data = experienceValidationSchema.parse(req.body);
    const updated = await Experience.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    if (!updated) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    res.json({ message: 'Experience updated', data: updated });
  } catch (err) {
    if (err.name === 'ZodError') {
      return res.status(400).json({ errors: err.errors });
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete
export const deleteExperience = async (req, res) => {
  try {
    const deleted = await Experience.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    res.json({ message: 'Experience deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
