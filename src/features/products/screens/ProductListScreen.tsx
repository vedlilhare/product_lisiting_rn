import React from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';
import ProductItem from '../components/ProductItem';
import { useProducts } from '../hooks/useProducts';
import { Product } from '../types/productTypes';

const ProductListScreen: React.FC = () => {
  const { products, loading } = useProducts();

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <FlatList
 numColumns={2}
      data={products}
      keyExtractor={(item: Product) => item.id.toString()}
      renderItem={({ item }) => <ProductItem item={item} />}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ProductListScreen;