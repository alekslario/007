import React, { useEffect } from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";

export default function Privacy() {
  return (
    <View style={styles.container}>
      <Text>
        The title and onPress handler are required. It is recommended to set
        accessibilityLabel to help make your app usable by everyone.
      </Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert("Simple Button pressed")}
      />

      <Text>I accept privacy terms and conditions.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.lightTheme,
    display: "flex",
    height: "100%",
    flexDirection: "column",
  },
});
