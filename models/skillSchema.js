import mongoose from 'mongoose';

const skillCategorySchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    skills: [
      {
        _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
        name: { type: String, required: true },
        level: { type: Number, required: true, min: 0, max: 100 },
      },
    ],
  },
  { timestamps: true },
);

const SkillCategory = mongoose.model('SkillCategory', skillCategorySchema);
export default SkillCategory;
