

import React from 'react';

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
import ProductPage from './src/products/ProductPage';
import CartPageScreen from './src/screens/CartPageScreen';
import ProductDetailPage from './src/screens/ProductDetailPage';



function App(): JSX.Element {


  return (
   <View style={styles.mainContainer}>
     <CartPageScreen/>
      <StatusBar />
   </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    width: "100%",


  },

});

export default App;
