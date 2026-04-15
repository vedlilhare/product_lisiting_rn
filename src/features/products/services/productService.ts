import { Product } from '../types/productTypes';

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch('https://fakestoreapi.com/products');
  return response.json();
};