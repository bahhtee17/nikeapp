import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'
import products from '../data/products'
import { useWindowDimensions } from 'react-native'

const ProductDetailPage = () => {
const product = products[0];
const {width} = useWindowDimensions();

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
     </View>

  )
}

const styles = StyleSheet.create({
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

