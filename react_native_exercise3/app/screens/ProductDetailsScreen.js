import React from "react";
import {
  Image,
  View,
  StyleSheet,
  Pressable,
  Alert,
  Dimensions,
} from "react-native";
import productsData from "../data/products";
import AppText from "../components/AppText";
import { useCartContext } from "../context/CartContext";
import StarRating from "../components/StarRating";

const { width, height } = Dimensions.get("window");

function ProductDetailsScreen({ navigation, route }) {
  const { addToCart } = useCartContext();

  function addToCartButton(id) {
    const item = productsData.find((e) => e.id === id);
    addToCart(item);
    Alert.alert("Cart", "Item is added to cart", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  }

  const id = route.params.id;
  const product = productsData.find((e) => e.id === id);

  return (
    <View style={styles.container}>
      <Image
        style={[styles.image, { width: width - 40 }]}
        source={{ uri: product.image }}
        resizeMode="contain"
      />

      {/* Styled title */}
      <View style={styles.row}>
        <AppText style={styles.label}>Title: </AppText>
        <AppText style={styles.value}>{product.title}</AppText>
      </View>

      {/* Styled price */}
      <View style={styles.row}>
        <AppText style={styles.label}>Price: </AppText>
        <AppText style={styles.value}>$ {product.price}</AppText>
      </View>

      {/* Styled description */}
      <View style={styles.row}>
        <AppText style={styles.label}>Description: </AppText>
        <AppText style={styles.value}>{product.description}</AppText>
      </View>

      {/* Styled category */}
      <View style={styles.row}>
        <AppText style={styles.label}>Category: </AppText>
        <AppText style={styles.value}>{product.category}</AppText>
      </View>

      {/* Star rating */}
      <StarRating rating={product.rating.rate} />
      <View style={styles.row}>
        <AppText style={styles.label}>Ratings: </AppText>
        <AppText style={styles.value}>
          {product.rating.count} ratings (Average: {product.rating.rate})
        </AppText>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, styles.backToHomeButton]}
          onPress={() => navigation.navigate("Home")}
        >
          <AppText style={styles.backToHomeText}>Back to Home</AppText>
        </Pressable>
        <Pressable
          style={[styles.button, styles.addToCartButton]}
          onPress={() => addToCartButton(id)}
        >
          <AppText style={styles.addToCartText}>Add to Cart</AppText>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  image: {
    height: 250,
  },
  row: {
    flexDirection: "row",
    marginVertical: 5,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
  },
  value: {
    fontSize: 16,
    color: "#666",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    padding: 15,
    borderRadius: 10,
  },
  backToHomeButton: {
    backgroundColor: "red",
  },
  backToHomeText: {
    textTransform: "uppercase",
    color: "white",
    textAlign: "center",
  },
  addToCartButton: {
    backgroundColor: "green",
  },
  addToCartText: {
    textTransform: "uppercase",
    color: "white",
    textAlign: "center",
  },
});

export default ProductDetailsScreen;
