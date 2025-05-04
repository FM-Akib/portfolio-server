import { z } from 'zod';

export const achievementValidationSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  organization: z.string().min(1, 'Organization is required'),
  year: z.number().int().min(1900).max(new Date().getFullYear()),
  image: z.string().url('Image must be a valid URL'),
  description: z.string().min(1, 'Description is required'),
});
