import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { ShoppingCartIcon } from 'react-native-heroicons/outline';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductPage from '../screens/ProductMainScreen';
import ProductDetailPage from '../screens/ProductDetailPage';
import CartPageScreen from '../screens/CartPageScreen';
import { useSelector } from 'react-redux';
import { selectNumberOfItems } from '../store/cartSlice';


const Navigation = () => {
    const Stack = createNativeStackNavigator()
    const numOfItems = useSelector(selectNumberOfItems)
  return (

    <NavigationContainer>
    <Stack.Navigator >
        <Stack.Screen name='Products' component={ProductPage}
        options={({navigation}) => ({
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("Your Cart")} style={{flexDirection:"row"}}>
                <ShoppingCartIcon width={25} height={25} color={"gray"} />
                <Text style={{paddingHorizontal: 3}}>{numOfItems}</Text>
            </Pressable>
          )
        })}
         />
        <Stack.Screen name='Details' component={ProductDetailPage} />
        <Stack.Screen name="Your Cart" component={CartPageScreen} />
    </Stack.Navigator>
</NavigationContainer>

  )
}

export default Navigation

const styles = StyleSheet.create({})