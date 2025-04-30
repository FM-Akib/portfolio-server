import { z } from 'zod';

export const blogValidationSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  excerpt: z.string().min(1, 'Excerpt is required'),
  content_markdown: z.string().min(1, 'Content is required'),
  cover_image_url: z.string().url('Cover Image must be a valid URL'),
  publication_date: z.coerce.date({ message: 'Invalid publication date' }),
  author: z.string().min(1, 'Author name is required'),
  tags: z.array(z.string()).optional(),
});
