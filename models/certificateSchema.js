import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    issuer: { type: String, required: true },
    date: { type: Date, required: true },
    credential_url: { type: String, required: true },
    photo: { type: String, required: true },
  },
  { timestamps: true },
);

const Certificate = mongoose.model('Certificate', certificateSchema);
export default Certificate;
