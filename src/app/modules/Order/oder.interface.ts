export interface IOrder {
  price: number;
  email: string;
  productId: string;
  quantity: number;
  totalAmount: number;
  status: 'pending' | 'completed' | 'cancelled';
}
