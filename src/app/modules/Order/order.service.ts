import { IOrder } from './oder.interface';
import { Order } from './order.model';

const createOrderIntoDB = async (orderData: IOrder) => {
  const order = new Order(orderData);
  await order.save();
  return order;
};

const getAllOrdersFromDB = async () => {
  return Order.find();
};

const getOrderByIdFromDB = async (id: string) => {
  return Order.findById(id);
};

const updateOrderInDB = async (id: string, updateData: Partial<IOrder>) => {
  return Order.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteOrderFromDB = async (id: string) => {
  return Order.findByIdAndDelete(id);
};

export const OrderService = {
  createOrderIntoDB,
  getAllOrdersFromDB,
  getOrderByIdFromDB,
  updateOrderInDB,
  deleteOrderFromDB,
};
