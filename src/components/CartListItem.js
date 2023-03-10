import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import {PlusCircleIcon} from "react-native-heroicons/outline";
import {MinusCircleIcon} from "react-native-heroicons/outline"

const CartListItem = ({ cartItem }) => {
  const increaseQuantity = () => {};

  const decreaseQuantity = () => {};

  return (

 <View style={styles.container}>

    <Image source={{uri: cartItem.product.image}} style={styles.image}/>


    <View style={styles.contentContainer}>
     <Text style={styles.name}>{cartItem.product.name}</Text>
     <Text style={styles.size}>Size {cartItem.size}</Text>
     <View style={styles.footer}>
      <Pressable>
      <  PlusCircleIcon width={30} height={30} color={"gray"}/>
      </Pressable>

          <Text style={styles.quantity}>{cartItem.quantity}</Text>
          <Pressable>
            <MinusCircleIcon width={30} height={30} color={"gray"}/>
          </Pressable>

          <Text style={styles.itemTotal}>$320.0</Text>
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
