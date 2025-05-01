import Achievement from '../models/achievementSchema.js';
import { achievementValidationSchema } from '../validation/achievement.validation.js';

// Create
export const createAchievement = async (req, res) => {
  try {
    const data = achievementValidationSchema.parse(req.body);
    const achievement = new Achievement(data);
    await achievement.save();
    res.status(201).json({ message: 'Achievement created', data: achievement });
  } catch (err) {
    if (err.name === 'ZodError') {
      return res.status(400).json({ errors: err.errors });
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get All
export const getAllAchievements = async (req, res) => {
  try {
    const achievements = await Achievement.find().sort({ year: -1 });
    res.json({ data: achievements });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get One
export const getAchievementById = async (req, res) => {
  try {
    const achievement = await Achievement.findById(req.params.id);
    if (!achievement) {
      return res.status(404).json({ message: 'Achievement not found' });
    }
    res.json({ data: achievement });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update
export const updateAchievement = async (req, res) => {
  try {
    const data = achievementValidationSchema.parse(req.body);
    const updated = await Achievement.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    if (!updated) {
      return res.status(404).json({ message: 'Achievement not found' });
    }
    res.json({ message: 'Achievement updated', data: updated });
  } catch (err) {
    if (err.name === 'ZodError') {
      return res.status(400).json({ errors: err.errors });
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete
export const deleteAchievement = async (req, res) => {
  try {
    const deleted = await Achievement.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Achievement not found' });
    }
    res.json({ message: 'Achievement deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
