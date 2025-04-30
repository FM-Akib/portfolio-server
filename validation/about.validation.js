// validations/about.validation.js
import { z } from 'zod';

const urlOptional = z.string().url().optional().or(z.literal(''));

const aboutValidationSchema = z.object({
  full_name: z.string().min(1, 'Full name is required'),
  professional_title: z.string().min(1, 'Professional title is required'),
  description_short: z.string().min(1).max(300),
  description_long: z.string().min(1),
  photo: z.string().url('Photo must be a valid URL'),
  github_url: urlOptional,
  linkedin_url: urlOptional,
  facebook_url: urlOptional,
  instagram_url: urlOptional,
  codeforces_url: urlOptional,
  codechef_url: urlOptional,
  youtube_url: urlOptional,
});

export default aboutValidationSchema;
