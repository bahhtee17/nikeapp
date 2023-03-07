import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import products from '../data/products'
import { useWindowDimensions } from 'react-native'

const ProductDetailPage = () => {
const product = products[0];
const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
       <FlatList
         data={product.images}
         renderItem={({item}) => (
            <Image source={{uri: item}} style={{width, aspectRatio: 1}}/>
         )}
         horizontal
         showsHorizontalScrollIndicator={false}
         pagingEnabled

       />
    </View>
  )
}

const styles = StyleSheet.create({


  });

export default ProductDetailPage;

