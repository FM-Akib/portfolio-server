import Blog from '../models/blogSchema.js';
import { blogValidationSchema } from '../validations/blog.validation.js';

// Create
export const createBlog = async (req, res) => {
  try {
    const data = blogValidationSchema.parse(req.body);
    const blog = new Blog(data);
    await blog.save();
    res.status(201).json({ message: 'Blog post created', data: blog });
  } catch (err) {
    if (err.name === 'ZodError') {
      return res.status(400).json({ errors: err.errors });
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get All
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ publication_date: -1 });
    res.json({ data: blogs });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get One
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.json({ data: blog });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update
export const updateBlog = async (req, res) => {
  try {
    const data = blogValidationSchema.parse(req.body);
    const updated = await Blog.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    if (!updated) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.json({ message: 'Blog post updated', data: updated });
  } catch (err) {
    if (err.name === 'ZodError') {
      return res.status(400).json({ errors: err.errors });
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete
export const deleteBlog = async (req, res) => {
  try {
    const deleted = await Blog.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.json({ message: 'Blog post deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
