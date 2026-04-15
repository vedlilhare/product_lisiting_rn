import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Product } from '../types/productTypes';

interface Props {
  item: Product;
}

const ProductItem: React.FC<Props> = ({ item }) => {
  return (
    // <View style={styles.container}>
    //   <Image source={{ uri: item.image }} style={styles.image} />
    //   <Text>{item.title}</Text>
    //   <Text>₹ {item.price}</Text>
    // </View>

    <View style= {styles.container}>
      <View style= {styles.imageContainer}>
  <Image source={{ uri: item.image }} style={styles.image} />
  </View>

    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  // container: { padding: 10 },
  // image: { height: 100, width: 100 }
  container: {
    flex: 1,
    // width:177,
   flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10,
  

  },
    image: {
       height: 140,
       width: 177 ,
       padding: 4,
      
      
      },
      imageContainer: {
       
       height: 180,
       width: 180,
       backgroundColor: '#fff',
       borderRadius:8,
       borderColor:'#DBD8DD',
       borderWidth: 1
      
      

      }
});