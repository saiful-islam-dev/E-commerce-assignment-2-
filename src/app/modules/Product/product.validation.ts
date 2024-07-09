import { z } from 'zod';

export const productSchemaZod = z.object({
  name: z.string().min(1),
  description: z.string(),
  price: z.number().positive(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(
    z.object({
      type: z.string(),
      value: z.string(),
    }),
  ),
  inventory: z.object({
    quantity: z.number().int().nonnegative(),
    inStock: z.boolean(),
  }),
});
