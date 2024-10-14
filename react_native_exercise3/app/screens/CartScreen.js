import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import { useCartContext } from "../context/CartContext";
import AppText from "../components/AppText";
import CartItem from "../components/CartItem";

const { width, height } = Dimensions.get("window");

function CartScreen({ navigation }) {
  const { cart } = useCartContext();

  function renderItem({ item }) {
    return (
      <CartItem
        id={item.id}
        image={item.image}
        name={item.title}
        price={item.price}
        quantity={item.quantity}
        category={item.category}
      />
    );
  }

  return (
    <>
      {cart && cart.length > 0 ? (
        <View style={styles.container}>
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={cart}
            renderItem={renderItem}
            ItemSeparatorComponent={() => (
              <View style={{ marginVertical: 10 }} />
            )}
          />
          <View style={styles.checkoutButton}>
            <AppText style={styles.checkoutButtonText}>Check out</AppText>
          </View>
        </View>
      ) : (
        <View style={styles.emptyCartContainer}>
          <View style={styles.emptyCartSubContainer}>
            <Image
              style={styles.emptyCartImage}
              source={require("../assets/emptyCart.png")}
            />
            <AppText style={styles.emptyCartText1}>Your cart is empty</AppText>
            <AppText style={styles.emptyCartText2}>
              Looks like you haven't made your choice yet
            </AppText>
            <Pressable
              style={styles.startShoppingButton}
              onPress={() => navigation.navigate("Home")}
            >
              <AppText style={styles.startShoppingButtonText}>
                Start Shopping
              </AppText>
            </Pressable>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  checkoutButton: {
    padding: 10,
    backgroundColor: "red",
    width: "80%",
    alignItems: "center",
    borderRadius: 20,
  },
  checkoutButtonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  emptyCartSubContainer: {
    width: width * 0.6,
    height: height * 0.7,
    alignItems: "center",
  },
  emptyCartImage: {
    width: width * 0.7,
    height: height * 0.4,
  },
  emptyCartText1: {
    fontSize: height * 0.03,
    fontWeight: "500",
  },
  emptyCartText2: {
    fontSize: height * 0.022,
    textAlign: "justify",
    color: "grey",
    marginVertical: height * 0.02,
  },
  startShoppingButton: {
    padding: 10,
    backgroundColor: "red",
    width: "80%",
    alignItems: "center",
    borderRadius: 20,
    marginTop: height * 0.02,
  },
  startShoppingButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CartScreen;
