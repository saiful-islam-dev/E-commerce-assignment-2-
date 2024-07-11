import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductService } from './product.service';

const addAProduct = catchAsync(async (req, res) => {
  const productData = req.body;
  const result = await ProductService.createProductIntoDB(productData);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Product created successfully!',
    data: result,
  });
});

const getAllProducts = catchAsync(async (req, res) => {
  const { searchTerm } = req.query;
  const result = await ProductService.getAllProductsFromDB(
    searchTerm as string,
  );

  let message = 'All products fetched successfully!';
  if (searchTerm) {
    message = `Products matching search term '${searchTerm}' fetched successfully!`;
  }

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message,
    data: result,
  });
});

const getProductById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductService.getProductByIdFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product fetched successfully!',
    data: result,
  });
});

const updateProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  const result = await ProductService.updateProductInDB(id, updateData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product updated successfully!',
    data: result,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductService.deleteProductFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product deleted successfully!',
    data: result,
  });
});

export const ProductController = {
  addAProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
