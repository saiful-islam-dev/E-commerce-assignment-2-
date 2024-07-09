export interface IOrder {
  price: number;
  productId: string;
  quantity: number;
  totalAmount: number;
  status: 'pending' | 'completed' | 'cancelled';
}
