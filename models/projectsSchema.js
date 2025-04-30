import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    completion_date: { type: Date, required: true },
    short_description: { type: String, required: true, maxlength: 300 },
    detailed_description: { type: String, required: true },
    role: { type: String, required: true },
    photo_url: { type: String, required: true },
    featured: { type: Boolean, default: false },
    live_url: { type: String },
    github_url: { type: String },
    tags: [{ type: String }],
  },
  { timestamps: true },
);

const Project = mongoose.model('Project', projectSchema);
export default Project;
