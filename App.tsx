

import React from 'react';
import { ShoppingCartIcon } from 'react-native-heroicons/outline';
import {
  FlatList,
  Pressable,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductPage from './src/screens/ProductMainScreen';
import ProductDetailPage from './src/screens/ProductDetailPage';
import CartPageScreen from './src/screens/CartPageScreen';

import { useSelector, Provider } from 'react-redux';
import { store } from './src/store';
import Navigation from './src/components/Navigation';



function App() {




  return (
    <Provider store={store}>
     <Navigation/>
</Provider>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    width: "100%",


  },

});

export default App;
