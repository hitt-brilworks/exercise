import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const totalStars = 5;

  return (
    <View style={styles.container}>
      {[...Array(totalStars)].map((_, index) => {
        if (index < filledStars) {
          return (
            <MaterialCommunityIcons
              key={index}
              name="star"
              size={24}
              color="gold"
            />
          );
        } else if (index === filledStars && halfStar) {
          return (
            <MaterialCommunityIcons
              key={index}
              name="star-half-full"
              size={24}
              color="gold"
            />
          );
        }
        return (
          <MaterialCommunityIcons
            key={index}
            name="star-outline"
            size={24}
            color="gold"
          />
        );
      })}
      <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
      {/* Display the rating value */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 16,
  },
});

export default StarRating;
