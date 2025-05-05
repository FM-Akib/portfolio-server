import express from 'express';
import {
  createSkillCategory,
  deleteSkillCategory,
  getAllSkillCategories,
  getSkillCategoryById,
  insertManySkillCategories,
  updateManySkillCategories,
  updateSkillCategory,
} from '../controllers/skills.controller.js';

const router = express.Router();

// Create a new skill category
router.post('/', createSkillCategory);
// Insert multiple skill categories
router.post('/bulk', insertManySkillCategories);
// Update multiple skill categories
router.patch('/', updateManySkillCategories);
// Update a skill category by id
router.put('/:id', updateSkillCategory);
// Delete a skill category by id
router.delete('/:id', deleteSkillCategory);
// Get all skill categories
router.get('/', getAllSkillCategories);
// Get a skill category by id
router.get('/:id', getSkillCategoryById);

export default router;
