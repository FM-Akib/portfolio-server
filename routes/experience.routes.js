import express from 'express';
import {
  createExperience,
  deleteExperience,
  getAllExperiences,
  getExperienceById,
  updateExperience,
} from '../controllers/experience.controller.js';

const router = express.Router();

router.post('/', createExperience);
router.get('/', getAllExperiences);
router.get('/:id', getExperienceById);
router.put('/:id', updateExperience);
router.delete('/:id', deleteExperience);

export default router;
