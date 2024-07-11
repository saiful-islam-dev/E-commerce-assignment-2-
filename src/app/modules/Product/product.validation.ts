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

export const updateProductSchemaZod = z.object({
  name: z.string().min(1).optional(),
  description: z.string().optional(),
  price: z.number().positive().optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
  variants: z
    .array(
      z.object({
        type: z.string().optional(),
        value: z.string().optional(),
      }),
    )
    .optional(),
  inventory: z
    .object({
      quantity: z.number().int().nonnegative().optional(),
      inStock: z.boolean().optional(),
    })
    .optional(),
});
