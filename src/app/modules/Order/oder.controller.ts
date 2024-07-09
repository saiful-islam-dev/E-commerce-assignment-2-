import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { Request, Response } from 'express';
import { OrderService } from './order.service';

const addAnOrder = catchAsync(async (req: Request, res: Response) => {
  const orderData = req.body;
  const result = await OrderService.createOrderIntoDB(orderData);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Order created successfully',
    data: result,
  });
});

const getAllOrders = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.getAllOrdersFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Orders retrieved successfully',
    data: result,
  });
});

const getOrderById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await OrderService.getOrderByIdFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Order retrieved successfully',
    data: result,
  });
});

const updateOrder = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = req.body;
  const result = await OrderService.updateOrderInDB(id, updateData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Order updated successfully',
    data: result,
  });
});

const deleteOrder = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
    const result =  await OrderService.deleteOrderFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Order deleted successfully',
    data: result,
  });
});

export const OrderController = {
  addAnOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};
