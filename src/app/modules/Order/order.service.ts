import { Product } from '../Product/product.mode';
import { IOrder } from './oder.interface';
import { Order } from './order.model';

const createOrderIntoDB = async (orderData: IOrder) => {
  // Fetch the product
  const product = await Product.findById(orderData.productId);
  if (!product) {
    throw new Error('Product not found');
  }

  // Check if the price matches
  if (product.price !== orderData.price) {
    throw new Error('Incorrect price');
  }

  // Check if the quantity is available and not zero
  if (orderData.quantity <= 0) {
    throw new Error('Quantity must be greater than zero');
  }

  if (product.inventory.quantity < orderData.quantity) {
    throw new Error('Insufficient quantity available');
  }

  // Calculate total amount
  const totalAmount = product.price * orderData.quantity;

  // Create the order
  const order = {
    email: orderData.email,
    productId: orderData.productId,
    quantity: orderData.quantity,
    totalAmount: totalAmount,
  };

  const result = await Order.create(order);

  // Update the product's inventory
  product.inventory.quantity -= orderData.quantity;
  product.inventory.inStock = product.inventory.quantity > 0;
  await product.save();

  return result;
};

const getAllOrdersFromDB = async (email?: string) => {
  const query = email ? { email } : {};
  const orders = await Order.find(query);
  return orders;
};

// const getOrderByIdFromDB = async (id: string) => {
//   const result = await Order.findById(id);
//   return result;
// };

// const updateOrderInDB = async (id: string, updateData: Partial<IOrder>) => {
//   const result = await Order.findByIdAndUpdate(id, updateData, { new: true });
//   return result;
// };

// const deleteOrderFromDB = async (id: string) => {
//   const result = await Order.findByIdAndDelete(id);
//   return result;
// };

export const OrderService = {
  createOrderIntoDB,
  getAllOrdersFromDB,
  // getOrderByIdFromDB,
  // updateOrderInDB,
  // deleteOrderFromDB,
};
