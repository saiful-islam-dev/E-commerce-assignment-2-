import { Schema, model } from 'mongoose';
import { IProduct } from './product.interface';

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: [
      {
        type: { type: String, required: true },
        value: { type: String, required: true },
      },
    ],
    inventory: {
      quantity: { type: Number, required: true },
      inStock: { type: Boolean, required: true },
    },
  },
  {
    timestamps: true,
  },
);

const Product = model<IProduct>('Product', productSchema);
export { Product };
