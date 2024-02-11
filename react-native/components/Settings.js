import React, { useEffect } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  StatusBar,
  ScrollView,
  Switch,
} from "react-native";
import { useStore } from "../util/store";

import { Button as CustomButton } from "./Button";

import { BackArrow } from "../svg/BackArrow";

export default function Settings({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topbar}>
        <View>
          <CustomButton
            action={() => navigation.navigate("Main", {})}
            style={{}}
          >
            <BackArrow />
          </CustomButton>
        </View>
        <Text>Settings</Text>
        <View></View>
      </View>
      <View style={styles.scrollViewContainer}>
        <ScrollView>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text>
            The title and onPress handler are required. It is recommended to set
            accessibilityLabel to help make your app usable by everyone.
          </Text>
          <Button
            title="Press me"
            onPress={() => Alert.alert("Simple Button pressed")}
          />

          <Text>I accept privacy terms and conditions.</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  topbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  scrollViewContainer: { padding: 20 },
  scrollView: {
    ...GlobalStyles.lightTheme,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    position: "relative",
    padding: 20,
  },
});
