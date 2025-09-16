import { z } from 'zod';
import { EMAIL_REGEX, PHONE_REGEX } from '../constants';

export const orderFormSchema = z.object({
  name: z
    .string()
    .min(3, 'Name should have at least 3 characters')
    .max(20, 'Name should have at most 20 characters'),
  phone: z
    .string()
    .min(5, 'Phone number should have at least 5 characters')
    .regex(PHONE_REGEX, 'Invalid phone format'),
  email: z
    .string()
    .regex(EMAIL_REGEX, 'Invalid email format')
    .nonempty('Email is required.')
    .max(64, 'Email must not exceed 64 characters.'),
  address: z
    .string()
    .min(5, 'Address should have at least 5 characters')
    .max(100, 'Address should have at most 100 characters'),
});
