/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import products from './src/data/products';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



function App(): JSX.Element {


  return (
   <View style={styles.mainContainer}>
     <FlatList data={products} renderItem={({item}) =>(
     <View style={styles.productContainer}>
        <Image style={styles.image} source={{uri: item.image}}/>
     </View> )} numColumns={2}/>
   </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  image:{
    width: "100%",
    aspectRatio:1

  },
  productContainer:{
 width: "50%",
 padding: 1
  }
});

export default App;
