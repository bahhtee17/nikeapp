import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React from 'react'
import products from '../data/products'

const ProductPage = () => {
  return (
    <FlatList data={products} renderItem={({item}) =>(
        <View style={styles.productContainer}>
           <Image style={styles.image} source={{uri: item.image}}/>
        </View> )} numColumns={2}/>
  )
}

const styles = StyleSheet.create({

    image:{
      width: "100%",
      aspectRatio:1

    },
    productContainer:{
   width: "50%",
   padding: 1
    }
  });

export default ProductPage