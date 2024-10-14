import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import AppText from "../components/AppText";
import { Ionicons } from "@expo/vector-icons";

const { height } = Dimensions.get("window");

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Ionicons name="person-sharp" size={80} color="white" />
      </View>
      <View style={styles.details}>
        <View style={styles.row}>
          <AppText style={styles.label}>Name</AppText>
          <AppText style={styles.value}>Hit Trivedi</AppText>
        </View>
        <View style={styles.row}>
          <AppText style={styles.label}>Age</AppText>
          <AppText style={styles.value}>19</AppText>
        </View>
        <View style={styles.row}>
          <AppText style={styles.label}>Gender</AppText>
          <AppText style={styles.value}>Male</AppText>
        </View>
        <View style={styles.row}>
          <AppText style={styles.label}>Email Address</AppText>
          <AppText style={styles.value}>hitt.dev1@gmail.com</AppText>
        </View>
        <View style={styles.row}>
          <AppText style={styles.label}>Emergency Contact</AppText>
          <AppText style={styles.value}>+91 9999999999</AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  profile: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    backgroundColor: "#007bff",
    height: 80,
    width: 80,
    marginBottom: 20,
    elevation: 4,
  },
  details: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  label: {
    fontWeight: "bold",
    color: "grey",
    fontSize: height * 0.02,
  },
  value: {
    fontSize: height * 0.018,
    color: "#333",
  },
});

export default ProfileScreen;
