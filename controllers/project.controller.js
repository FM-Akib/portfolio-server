import Project from '../models/projectsSchema.js';
import { projectValidationSchema } from '../validations/project.validation.js';

// Create a new project
export const createProject = async (req, res) => {
  try {
    const data = projectValidationSchema.parse(req.body);
    const project = new Project(data);
    await project.save();
    res
      .status(201)
      .json({ message: 'Project created successfully', data: project });
  } catch (error) {
    if (error.name === 'ZodError') {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json({ data: projects });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get single project by ID
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ data: project });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update project
export const updateProject = async (req, res) => {
  try {
    const data = projectValidationSchema.parse(req.body);
    const project = await Project.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ message: 'Project updated successfully', data: project });
  } catch (error) {
    if (error.name === 'ZodError') {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete project
export const deleteProject = async (req, res) => {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
