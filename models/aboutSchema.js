// models/About.js
import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
      trim: true,
    },
    professional_title: {
      type: String,
      required: true,
      trim: true,
    },
    description_short: {
      type: String,
      required: true,
      maxlength: 300,
    },
    description_long: {
      type: String,
    },
    photo: {
      type: String,
    },
    github_url: String,
    linkedin_url: String,
    facebook_url: String,
    instagram_url: String,
    codeforces_url: String,
    codechef_url: String,
    youtube_url: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.About || mongoose.model('About', aboutSchema);
