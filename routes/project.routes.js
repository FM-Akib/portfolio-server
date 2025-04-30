import express from 'express';
import {
  createProject,
  deleteProject,
  getAllProjects,
  getProjectById,
  updateProject,
} from '../controllers/project.controller.js';

const router = express.Router();

router.post('/', createProject); // Create new project
router.get('/', getAllProjects); // Get all projects
router.get('/:id', getProjectById); // Get single project
router.put('/:id', updateProject); // Update project
router.delete('/:id', deleteProject); // Delete project

export default router;
