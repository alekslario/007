import React, { useEffect } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Pressable,
  Text,
  Alert,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

//get the dimensions of the screen
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import { useAssets } from "expo-asset";

export default function LocationShare({ navigation }) {
  const [assets, error] = useAssets([require("../assets/Gradient1.png")]);
  return (
    <View style={styles.container}>
      {assets ? (
        <Image
          source={assets[0]}
          style={{
            position: "absolute",
            height: windowHeight,
            width: windowWidth + 15,
            left: -10,
            top: 0,
          }}
        />
      ) : null}
      <View
        style={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <View style={{ height: 100 }}></View>
        <Text style={styles.title}>We need to know your location</Text>
      </View>

      <View style={{ paddingBottom: "5%" }}>
        <Pressable
          style={({ pressed }) => ({
            ...styles.button,
            ...{ opacity: pressed ? 0.5 : 1 },
          })}
          onPress={() => navigation.navigate("Main", {})}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>

        <View
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Pressable
            style={({ pressed }) => ({
              ...{ opacity: pressed ? 0.5 : 1 },
            })}
            onPress={() => navigation.navigate("Main", {})}
          >
            <Text style={{ color: "#ffffff" }}>Don't share location</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.lightTheme,
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: 20,
  },
  title: {
    fontSize: 40,
  },
  button: {
    width: "100%",
    backgroundColor: "#7364CE",
    borderRadius: 5,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
});
