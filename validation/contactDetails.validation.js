import { z } from 'zod';

export const contactDetailsValidationSchema = z.object({
  email: z.string().email('Invalid email'),
  phone: z.string().min(7, 'Phone number required'),
  address: z.string().min(3, 'Address required'),
  linkedin_url: z.string().url('Invalid LinkedIn URL'),
  github_url: z.string().url('Invalid GitHub URL'),
  twitter_url: z.string().url('Invalid Twitter URL'),
  available_for: z.array(z.string()).optional(),
});
