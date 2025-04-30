import { z } from 'zod';

export const certificateValidationSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  issuer: z.string().min(1, 'Issuer is required'),
  date: z.coerce.date({ message: 'Invalid date format' }),
  credential_url: z.string().url('Credential URL must be valid'),
  photo: z.string().url('Photo must be a valid URL'),
});
