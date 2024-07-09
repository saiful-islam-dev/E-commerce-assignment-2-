 // Assuming this is your Mongoose model

import { IProduct } from "./product.interface";
import { Product } from "./product.mode";

const createProductIntoDB = async (productData: IProduct) => {
  const product = new Product(productData);
  await product.save();
  return product;
};

const getAllProductsFromDB = async () => {
  return Product.find();
};

const getProductByIdFromDB = async (id: string) => {
  return Product.findById(id);
};

const updateProductInDB = async (id: string, updateData: Partial<IProduct>) => {
  return Product.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteProductFromDB = async (id: string) => {
  return Product.findByIdAndDelete(id);
};

export const ProductService = {
  createProductIntoDB,
  getAllProductsFromDB,
  getProductByIdFromDB,
  updateProductInDB,
  deleteProductFromDB,
};
