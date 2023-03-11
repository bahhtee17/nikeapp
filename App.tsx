

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
import { Provider } from 'react-redux';
import { store } from './src/store';


function App(): JSX.Element {
  const Stack = createNativeStackNavigator()


  return (
    <Provider store={store}>
    <NavigationContainer>
    <Stack.Navigator >
        <Stack.Screen name='Products' component={ProductPage}
        options={({navigation}) => ({
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("Your Cart")} style={{flexDirection:"row"}}>
                <ShoppingCartIcon width={25} height={25} color={"gray"} />
                <Text style={{paddingHorizontal: 3}}>1</Text>
            </Pressable>
          )
        })}
         />
        <Stack.Screen name='Details' component={ProductDetailPage} />
        <Stack.Screen name="Your Cart" component={CartPageScreen} />
    </Stack.Navigator>
</NavigationContainer>
</Provider>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    width: "100%",


  },

});

export default App;
