import { IProduct } from './product.interface';
import { Product } from './product.mode';

const createProductIntoDB = async (productData: IProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getAllProductsFromDB = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, 'i');
  const result = await Product.find({
    $or: [{ name: { $regex: regex } }, { description: { $regex: regex } }],
  });
  return result;
};

const getProductByIdFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateProductInDB = async (id: string, updateData: Partial<IProduct>) => {
  const result = await Product.findByIdAndUpdate(id, updateData, { new: true });
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductsFromDB,
  getProductByIdFromDB,
  updateProductInDB,
  deleteProductFromDB,
};
