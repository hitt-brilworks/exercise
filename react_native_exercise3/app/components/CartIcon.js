import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { useCartContext } from "../context/CartContext";

export default function CartIcon() {
  const navigation = useNavigation();
  const { cart } = useCartContext();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("CartStack")}>
      {cart?.length > 0 ? (
        <Ionicons
          name="cart"
          size={24}
          color="black"
          style={{ marginRight: 15 }}
        />
      ) : (
        <Ionicons
          name="cart-outline"
          size={24}
          color="black"
          style={{ marginRight: 15 }}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
