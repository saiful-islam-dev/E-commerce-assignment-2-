import mongoose, { Schema, Document } from 'mongoose';

interface IOrder extends Document {
  productId: string;
  quantity: number;
  totalAmount: number;
  status: 'pending' | 'completed' | 'cancelled';
}

const OrderSchema: Schema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' },
}, { timestamps: true });

export const Order = mongoose.model<IOrder>('Order', OrderSchema);
