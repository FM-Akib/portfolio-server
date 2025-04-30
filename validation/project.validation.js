const { z } = require('zod');

const urlOptional = z.string().url().optional().or(z.literal(''));

const projectValidationSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  completion_date: z.string().datetime('Invalid date format (use ISO)'),
  short_description: z.string().min(1).max(300),
  detailed_description: z.string().min(1),
  role: z.string().min(1),
  photo_url: z.string().url('Invalid photo URL'),
  featured: z.boolean().optional(),
  live_url: urlOptional,
  github_url: urlOptional,
  tags: z.array(z.string()).optional(),
});
export default projectValidationSchema;
