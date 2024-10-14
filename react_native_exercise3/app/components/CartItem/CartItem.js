import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { memo } from "react";
import AppText from "../AppText";
import Quantity from "./Quantity";

import { useCartContext } from "../../context/CartContext";

const { height, width } = Dimensions.get("window");

const CartItem = ({ id, name, image, quantity, category, price }) => {
  const { cart, removeItemFromCart } = useCartContext();
  const item = cart.find((e) => e.id === id);
  function removeItem() {
    Alert.alert(
      item.title,
      "Do you want to remove this product from the cart?",
      [
        {
          text: "CANCEL",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "REMOVE", onPress: () => removeItemFromCart(id) },
      ]
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: image }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.subContainer}>
        <View style={styles.textDetails}>
          <AppText style={styles.name}>{name}</AppText>
          <AppText style={styles.category}>{category}</AppText>
          <AppText style={styles.price}>$ {price}</AppText>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.removeButton} onPress={removeItem}>
            <AppText style={styles.removeButtonText}>Remove</AppText>
          </TouchableOpacity>
          <Quantity quantity={quantity} id={id} />
        </View>
      </View>
    </View>
  );
};

export default memo(CartItem);

const styles = StyleSheet.create({
  container: {
    height: height * 0.25,
    width: width * 0.94,
    backgroundColor: "white",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 5,
  },
  imageContainer: {
    width: "28%",
    height: "85%",
    paddingLeft: 10,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  subContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
  },
  textDetails: {
    marginVertical: 10,
  },
  name: {
    fontSize: height * 0.02,
    fontWeight: "bold",
  },
  category: {
    color: "grey",
    paddingTop: 4,
  },
  price: {
    paddingTop: 4,
    fontWeight: "bold",
  },
  buttons: {
    justifyContent: "space-between",
    flexDirection: "row",
    columnGap: 20,
  },
  removeButton: {
    backgroundColor: "#FF6347", // Tomato color for the button
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: "center",
    marginHorizontal: 10,
  },
  removeButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: height * 0.02,
  },
});
