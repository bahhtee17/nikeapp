import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import cart from '../data/cart';
import CartListItem from '../components/CartListItem';

const CartPageScreen = () => {
  return (
    <FlatList data={cart} renderItem={({item}) =>
        <CartListItem cartItem={item}/>
    } />
  )
}

export default CartPageScreen

const styles = StyleSheet.create({})