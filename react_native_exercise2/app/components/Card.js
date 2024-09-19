import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

import colors from "../config/colors";
import AppText from "./AppText";
import { useOrientation } from "../contexts/orientationContext";

function Card({ image, title, subTitle, isGridView, itemHeight, itemWidth }) {
  const orientation = useOrientation();
  return (
    <View
      style={[
        !isGridView
          ? {
              height: itemHeight,
            }
          : isGridView && orientation === "landscape"
          ? {
              height: itemHeight,
              flex: 1,
              justifyContent: "space-between",
            }
          : !isGridView && orientation === "landscape"
          ? {
              height: itemHeight,
              flex: 1,
            }
          : undefined,
      ]}
    >
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={[
          styles.image,
          !isGridView && orientation === "portrait"
            ? { width: 342, height: 620 }
            : isGridView && orientation === "landscape"
            ? { height: 270, width: 200 }
            : !isGridView && orientation === "landscape"
            ? {
                width: "100%",
                height: 255,
              }
            : undefined,
        ]}
      >
        <View style={styles.container}>
          <View
            style={[
              styles.likeContainerWrapper,
              isGridView
                ? { top: 10, left: 100 }
                : { alignSelf: "flex-end", top: 20, right: 20 },
              isGridView && orientation === "landscape"
                ? { alignSelf: "flex-start", left: 140 }
                : undefined,
            ]}
          >
            <BlurView style={styles.likeContainer} intensity={50}>
              <AntDesign name="hearto" size={25} color="white" />
            </BlurView>
          </View>
          <BlurView
            style={[
              styles.data,
              { height: isGridView ? 100 : 200 },
              !isGridView ? { padding: 30 } : undefined,
              !isGridView && orientation === "landscape"
                ? { padding: 15, height: "42%" }
                : undefined,
            ]}
            intensity={40}
            experimentalBlurMethod="dimezisBlurView"
          >
            <AppText
              style={[
                styles.title,
                !isGridView ? { fontSize: 32 } : undefined,
                !isGridView && orientation === "landscape"
                  ? { fontSize: 24 }
                  : undefined,
              ]}
            >
              {title}
            </AppText>
            {isGridView && (
              <FontAwesome5
                name="long-arrow-alt-right"
                size={35}
                color="white"
              />
            )}
            {!isGridView && (
              <AppText
                style={[
                  styles.subTitle,
                  !isGridView && orientation === "landscape"
                    ? { fontSize: 16 }
                    : undefined,
                ]}
              >
                {subTitle}
              </AppText>
            )}
          </BlurView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  image: {
    overflow: "hidden",
    borderRadius: 15,
    width: 162,
    height: 300,
  },
  likeContainerWrapper: {
    borderRadius: 25,
    overflow: "hidden",
    height: 50,
    width: 50,
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
    width: "100%",
  },
  title: {
    color: colors.title,
    fontSize: 24,
  },
  subTitle: {
    color: colors.subTitle,
    fontSize: 18,
    textAlign: "justify",
  },
});

export default Card;
