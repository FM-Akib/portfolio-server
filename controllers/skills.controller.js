import SkillCategory from '../models/skillSchema.js';

// Create a new skill category
export const createSkillCategory = async (req, res) => {
  try {
    const { category, skills } = req.body;
    const newSkillCategory = new SkillCategory({ category, skills });
    await newSkillCategory.save();
    res.status(201).json(newSkillCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing skill category
export const updateSkillCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { category, skills } = req.body;
    const updatedSkillCategory = await SkillCategory.findByIdAndUpdate(
      id,
      { category, skills },
      { new: true, runValidators: true },
    );
    if (!updatedSkillCategory) {
      return res.status(404).json({ message: 'Skill category not found' });
    }
    res.status(200).json(updatedSkillCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a skill category
export const deleteSkillCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSkillCategory = await SkillCategory.findByIdAndDelete(id);
    if (!deletedSkillCategory) {
      return res.status(404).json({ message: 'Skill category not found' });
    }
    res.status(200).json({ message: 'Skill category deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all skill categories
export const getAllSkillCategories = async (req, res) => {
  try {
    const skillCategories = await SkillCategory.find();
    res.status(200).json(skillCategories);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a skill category by id
export const getSkillCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const skillCategory = await SkillCategory.findById(id);
    if (!skillCategory) {
      return res.status(404).json({ message: 'Skill category not found' });
    }
    res.status(200).json(skillCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Insert multiple skill categories
export const insertManySkillCategories = async (req, res) => {
  try {
    const skillCategories = req.body.map(category => ({
      category: category.category,
      skills: category.skills,
    }));
    const newSkillCategories = await SkillCategory.insertMany(skillCategories, {
      ordered: false,
    });
    res.status(201).json(newSkillCategories);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update multiple skill categories
export const updateManySkillCategories = async (req, res) => {
  try {
    const { skillCategories } = req.body;

    if (!Array.isArray(skillCategories)) {
      return res
        .status(400)
        .json({ message: 'skillCategories must be an array' });
    }

    await SkillCategory.deleteMany({});
    const newSkillCategories = await SkillCategory.insertMany(skillCategories);

    res.status(200).json({
      message: 'Skill categories updated successfully',
      skillCategories: newSkillCategories,
    });
  } catch (error) {
    console.error('Error updating skill categories:', error);
    res.status(400).json({ message: error.message });
  }
};
