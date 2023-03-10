import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react';
import cart from '../data/cart';
import CartListItem from '../components/CartListItem';

import { useSelector } from 'react-redux';
import { selectDeliveryFee, selectSubtotal } from './../store/cartSlice';

const CartPageScreen = () => {

const ShoppingCartFooter = () => {
  const subtotal = useSelector(selectSubtotal)
  const deliveryFee = useSelector(selectDeliveryFee)
  return(
  <View style={styles.footerContainer}>
    <View style={styles.row}>
       <Text style={{color: "gray", fontSize: 15}}>Subtotal:</Text>
       <Text style={{color: "gray", fontSize: 15, fontWeight: "bold"}}>${subtotal}</Text>
    </View>
    <View style={styles.row}>
       <Text style={{color: "gray", fontSize: 15}}>Delivery:</Text>
       <Text style={{color: "gray", fontSize: 15, fontWeight: "bold"}}>${deliveryFee}</Text>
    </View>
    <View style={styles.row}>
       <Text style={{color: "gray", fontSize: 15}}>Total:</Text>
       <Text style={{color: "gray", fontSize: 15, fontWeight: "bold"}}>{subtotal + deliveryFee}</Text>
    </View>
  </View>
  )
}

   const cart = useSelector(state => state.cart.items)
  return (
    <>
    <FlatList data={cart} renderItem={({item}) =>
        <CartListItem cartItem={item}/>
    }
    ListFooterComponent={ShoppingCartFooter}/>

      <Pressable  style={styles.button}>
         <Text style={styles.buttonText}>Checkout</Text>
       </Pressable>
  </>
  )
}

export default CartPageScreen

const styles = StyleSheet.create({
  button:{

    width: "80%",


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
  footerContainer:{
   width: "100%",
   borderTopWidth: 1,
   borderColor: "gray",
   marginTop: 10

  },
  row:{
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  }
})