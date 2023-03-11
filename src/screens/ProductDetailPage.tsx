import { View, Text, StyleSheet, FlatList, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import products from '../data/products'
import { useWindowDimensions } from 'react-native'

import { useSelector } from 'react-redux';

const ProductDetailPage = () => {
const product = useSelector(state => state.products.selectedProduct)
const {width} = useWindowDimensions();

const onPressHandler = () => {
    console.warn("Pressed")
}

  return (

    <View>
        <ScrollView>
       <FlatList
         data={product.images}
         renderItem={({item}) => (
            <Image source={{uri: item}} style={{width, aspectRatio: 1}}/>
         )}
         horizontal
         showsHorizontalScrollIndicator={false}
         pagingEnabled
       />

      <View style={{padding:20}}>
       <Text style={styles.name}>{product.name}</Text>
       <Text style={styles.price}>${product.price}</Text>
       <Text style={styles.description}>{product.description}</Text>
       </View>

       </ScrollView>

       <Pressable onPress={onPressHandler} style={styles.button}>
         <Text style={styles.buttonText}>Add To Cart</Text>
       </Pressable>
     </View>

  )
}

const styles = StyleSheet.create({
    button:{

      width: "80%",
      position: "absolute",
      bottom: 30,
      backgroundColor: "#9dfbb2",
      alignSelf: "center",
      borderRadius: 10,
      padding: 10,
      alignItems: "center"
    },
    buttonText:{
    color: "#3e3c40",
    fontSize: 15,
    fontWeight: "500"

    },

   name:{
      marginHorizontal:10,
      color: "gray",
      fontSize: 30,
      letterSpacing:0.2,
      fontWeight:"bold"

   },
   price:{
    marginHorizontal:10,
    color: "black",
    fontWeight:"bold",
    fontSize: 20,


   },
   description:{
    color: "gray",
    marginHorizontal:10,
    fontSize: 15,
    lineHeight: 23
   }

  });

export default ProductDetailPage;

