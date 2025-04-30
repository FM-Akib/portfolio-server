import aboutSchema from '../models/aboutSchema.js';
import aboutValidationSchema from '../validation/about.validation.js';

// POST /api/about
export const createAbout = async (req, res) => {
  try {
    const parsed = aboutValidationSchema.parse(req.body);
    const about = new aboutSchema(parsed);
    await about.save();
    res
      .status(201)
      .json({ message: 'About created successfully', data: about });
  } catch (err) {
    if (err.name === 'ZodError') {
      return res.status(400).json({ errors: err.errors });
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// GET /api/about
export const getAbout = async (req, res) => {
  try {
    const about = await aboutSchema.findOne().sort({ createdAt: -1 });
    if (!about) {
      return res.status(404).json({ message: 'No about info found' });
    }
    res.json({ data: about });
  } catch (err) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
