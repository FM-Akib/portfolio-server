import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema(
  {
    company_name: { type: String, required: true, trim: true },
    position: { type: String, required: true },
    duration: { type: String, required: true }, // e.g. "Jan 2021 - Dec 2022"
    description: { type: String, required: true },
    responsibilities: [{ type: String }],
    technologies: [{ type: String }],
  },
  { timestamps: true },
);

const Experience = mongoose.model('Experience', experienceSchema);
export default Experience;
