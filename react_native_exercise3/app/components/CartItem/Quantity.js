import { StyleSheet, View, Pressable, Alert } from "react-native";
import { useCartContext } from "../../context/CartContext";
import AppText from "../AppText";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function Quantity({ id, quantity }) {
  const { cart, updateCart, removeItemFromCart } = useCartContext();
  const item = cart.find((e) => e.id === id);

  function increaseQuantity() {
    item.quantity++;
    updateCart(item);
  }

  function decreaseQuantity() {
    if (item.quantity > 0) {
      if (item.quantity === 1) {
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
        return;
      }
      item.quantity--;
      updateCart(item);
    }
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={decreaseQuantity}>
        <AppText style={styles.buttonText}>-</AppText>
      </Pressable>
      <AppText style={styles.quantityText}>{quantity}</AppText>
      <Pressable style={styles.button} onPress={increaseQuantity}>
        <AppText style={styles.buttonText}>+</AppText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    paddingVertical: 2,
    paddingHorizontal: 10,
    width: "auto",
  },
  button: {
    backgroundColor: "#007BFF",
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 10,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});
