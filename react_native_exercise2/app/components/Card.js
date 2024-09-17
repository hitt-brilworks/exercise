import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { BlurView } from "expo-blur";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import colors from "../config/colors";
import AppText from "./AppText";

function Card({ image, title, subTitle, isGridView }) {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={styles.likeContainerWrapper}>
          <BlurView style={styles.likeContainer} intensity={50}>
            <AntDesign name="hearto" size={25} color="white" />
          </BlurView>
        </View>
        <BlurView
          style={styles.data}
          intensity={40}
          experimentalBlurMethod="dimezisBlurView"
        >
          <AppText style={styles.title}>{title}</AppText>
          <FontAwesome5 name="long-arrow-alt-right" size={35} color="white" />
        </BlurView>
      </View>
    </ImageBackground>
    // <ImageBackground
    //   source={require("../assets/tokyo.jpg")}
    //   resizeMode="cover"
    //   style={styles.image}
    // >
    //   <View style={styles.container}>
    //     <View style={styles.likeContainerWrapper}>
    //       <BlurView style={styles.likeContainer} intensity={50}>
    //         <AntDesign name="hearto" size={25} color="white" />
    //       </BlurView>
    //     </View>
    //     <BlurView
    //       style={styles.data}
    //       intensity={40}
    //       experimentalBlurMethod="dimezisBlurView"
    //     >
    //       <AppText style={styles.title}>grgrgrg</AppText>
    //       <FontAwesome5 name="long-arrow-alt-right" size={35} color="white" />
    //     </BlurView>
    //   </View>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  image: {
    width: 170,
    height: 250,
  },
  likeContainerWrapper: {
    borderRadius: 25,
    overflow: "hidden",
    height: 50,
    width: 50,
    top: 10,
    left: 110,
  },
  likeContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
  },
  data: {
    padding: 10,
    justifyContent: "space-between",
    height: 100,
    width: "100%",
  },
  title: {
    color: colors.white,
    fontSize: 24,
  },
});

export default Card;
