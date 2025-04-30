import { z } from 'zod';

export const experienceValidationSchema = z.object({
  company_name: z.string().min(1, 'Company name is required'),
  position: z.string().min(1, 'Position is required'),
  duration: z.string().min(1, 'Duration is required'),
  description: z.string().min(1, 'Description is required'),
  responsibilities: z.array(z.string()).optional(),
  technologies: z.array(z.string()).optional(),
});
