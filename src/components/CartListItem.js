import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import {PlusCircleIcon} from "react-native-heroicons/outline";
import {MinusCircleIcon} from "react-native-heroicons/outline"
import {useDispatch} from "react-redux"
import { cartSlice } from './../store/cartSlice';
const CartListItem = ({ cartItem }) => {
  const dispatch = useDispatch()
  const increaseQuantity = () => {
    dispatch(cartSlice.actions.changeQuantity({
      productId: cartItem.product.id,
      amount: 1
    }))
  };

  const decreaseQuantity = () => {
    dispatch(cartSlice.actions.changeQuantity({
      productId: cartItem.product.id,
      amount: -1
    }))
  };

  return (

 <View style={styles.container}>

    <Image source={{uri: cartItem.product.image}} style={styles.image}/>


    <View style={styles.contentContainer}>
     <Text style={styles.name}>{cartItem.product.name}</Text>
     <Text style={styles.size}>Size {cartItem.size}</Text>
     <View style={styles.footer}>
      <Pressable onPress={increaseQuantity}>
      <  PlusCircleIcon width={30} height={30} color={"gray"}/>
      </Pressable>

          <Text style={styles.quantity}>{cartItem.quantity}</Text>
          <Pressable onPress={decreaseQuantity}>
            <MinusCircleIcon width={30} height={30} color={"gray"}/>
          </Pressable>

          <Text style={styles.itemTotal}>${cartItem.product.price * cartItem.quantity}</Text>
        </View>
    </View>
 </View>

  );
};

const styles = StyleSheet.create({
  container:{
    width: "100%",
    flexDirection: "row"
  },

  image:{
    width: "50%",
    aspectRatio: 1,
    marginVertical: 1,
   padding:40
  },
  contentContainer:{
    padding: 15,
    justifyContent: "space-around"
  },

  name:{
    color: "gray",
    fontSize: 20,
    fontWeight: "bold"

  },
  size:{
    color: "gray",
    fontSize: 15

  },

  footer:{
    flexDirection: "row",
    alignItems: "center",

  },

  quantity:{
    color: "gray"
  },

  itemTotal:{
    color: "gray",
    marginHorizontal: 20,
    fontSize: 20,
    fontWeight: "bold"
  }

});

export default CartListItem;
