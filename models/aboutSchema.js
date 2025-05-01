// models/About.js
import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    longDescription: {
      type: String,
    },
    image: {
      type: String,
    },

    resumeUrl: {
      type: String,
    },
    socialLinks: {
      github: String,
      linkedin: String,
      facebook: String,
      instagram: String,
      codeforces: String,
      codechef: String,
      youtube: String,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.About || mongoose.model('About', aboutSchema);
