import { View, Text, FlatList, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { productSlice } from '../store/productSlice'
import {useSelector, useDispatch} from "react-redux"

const ProductPage = ({navigation}) => {
  const products = useSelector(state => state.products.products)
  const dispatch = useDispatch();
  return (
    <FlatList data={products} renderItem={({item}) =>(
        <Pressable onPress={() =>{
          //dispatch
          dispatch(productSlice.actions.setSelectedProduct(item.id))
          navigation.navigate("Details")
          }} style={styles.productContainer}>
           <Image style={styles.image} source={{uri: item.image}}/>
        </Pressable> )} numColumns={2}/>
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