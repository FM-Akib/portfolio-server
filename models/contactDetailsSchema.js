import mongoose from 'mongoose';

const contactDetailsSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    linkedin_url: { type: String, required: true },
    github_url: { type: String, required: true },
    twitter_url: { type: String, required: true },
    available_for: [{ type: String, required: true }],
  },
  { timestamps: true },
);

const ContactDetails = mongoose.model('ContactDetails', contactDetailsSchema);
export default ContactDetails;
