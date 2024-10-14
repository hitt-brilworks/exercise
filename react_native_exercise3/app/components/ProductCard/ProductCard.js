import { Image, StyleSheet, Pressable, View, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const { width, height } = Dimensions.get("window");

import AppText from "../AppText";

export default function ProductCard({
  id,
  name,
  price,
  description,
  imageUrl,
}) {
  const navigation = useNavigation();

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{ uri: imageUrl }}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <AppText style={styles.name}>{truncateText(name, 25)}</AppText>
        <AppText style={styles.description}>{description}</AppText>
        <View style={styles.subContainer}>
          <AppText style={styles.price}>$ {price}</AppText>
          <Pressable
            onPress={() => {
              return navigation.navigate("ProductDetails", {
                id: id,
              });
            }}
          >
            <AppText style={styles.details}>View Details</AppText>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.47,
    height: height * 0.4,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 8,
    marginHorizontal: width * 0.01,
  },
  image: {
    height: "55%",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    padding: 10,
    flex: 1,
    justifyContent: "space-between",
  },
  name: {
    fontSize: width * 0.04,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  description: {
    fontSize: width * 0.035,
    color: "grey",
    marginBottom: 10,
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: width * 0.04,
    fontWeight: "bold",
    color: "#333",
  },
  details: {
    color: "blue",
    fontSize: width * 0.035,
    fontWeight: "600",
  },
});
