export interface IOrder {
  productId: string;
  quantity: number;
  totalAmount: number;
  status: 'pending' | 'completed' | 'cancelled';
}
