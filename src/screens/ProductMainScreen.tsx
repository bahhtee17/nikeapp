import { View, Text, FlatList, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import products from '../data/products'
import { useNavigation } from '@react-navigation/native'

const ProductPage = ({navigation}) => {
  //const navigation = useNavigation()
  return (
    <FlatList data={products} renderItem={({item}) =>(
        <Pressable onPress={() => navigation.navigate("Details")} style={styles.productContainer}>
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