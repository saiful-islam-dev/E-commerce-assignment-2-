import { z } from 'zod';

export const createOrderSchema = z.object({
  email: z.string().email(),
  productId: z.string(),
  price: z.number(),
  quantity: z.number().min(1, 'Quantity must be at least 1'),
});

export const updateOrderSchema = z.object({
  body: z.object({
    email: z.string().email({ message: 'Invalid email address' }).optional(),
    productId: z.string().optional(),
    price: z
      .number()
      .positive({ message: 'Price must be positive' })
      .optional(),
    quantity: z
      .number()
      .int()
      .positive({ message: 'Quantity must be a positive integer' })
      .optional(),
  }),
});
