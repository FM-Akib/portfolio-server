// validations/about.validation.js
import { z } from 'zod';

const urlOptional = z.string().url().optional().or(z.literal(''));

const aboutValidationSchema = z.object({
  name: z.string().min(1, 'Full name is required'),
  title: z.string().min(1, 'Professional title is required'),
  description: z.string().min(1),
  longDescription: z.string().optional().or(z.literal('')),
  image: z.string().url('Photo must be a valid URL'),
  resumeUrl: z.string().url('Resume must be a valid URL'),
  socialLinks: z.object({
    github: urlOptional,
    linkedin: urlOptional,
    facebook: urlOptional,
    instagram: urlOptional,
    codeforces: urlOptional,
    codechef: urlOptional,
    youtube: urlOptional,
  }),
});

export default aboutValidationSchema;
