import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Alert,
  StatusBar,
  ScrollView,
  Switch,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button as CustomButton } from "./Button";
import { firstLetterUppercase } from "../util/general";
import { BackArrow } from "../svg/BackArrow";
import Button from "./Button";
import { setPreferences } from "../util/store";
const theme = GlobalStyles.lightTheme;
const ClickAble = ({ text, handleClick, active, last, first }) => {
  return (
    <Button
      style={{
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        borderRadius: 0,
        ...(active === text
          ? {
              backgroundColor: theme.active,
            }
          : {
              backgroundColor: theme.secondaryBackgroundColor,
            }),

        ...(first
          ? { borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }
          : {}),
        ...(last
          ? { borderTopRightRadius: 10, borderBottomRightRadius: 10 }
          : {}),
      }}
      onPress={() => handleClick(text)}
    >
      <Text
        style={{
          fontFamily: "Roboto-Regular",
          ...(active === text
            ? {
                color: theme.backgroundColor,
              }
            : {
                color: theme.seconDaryText,
              }),
        }}
      >
        {text}
      </Text>
    </Button>
  );
};

const StackedSettings = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.preferences}>
      {Object.entries(data).map(([key, value], index) => {
        const { selected, options } = value;
        return (
          <View key={index} style={styles.preferenceName}>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 13,
                backgroundColor: theme.backgroundColor,
                marginBottom: 1,
                ...(index === 0
                  ? {
                      borderTopLeftRadius: theme.borderRadius,
                      borderTopRightRadius: theme.borderRadius,
                    }
                  : {}),
                ...(index === Object.keys(data).length - 1
                  ? {
                      borderBottomLeftRadius: theme.borderRadius,
                      borderBottomRightRadius: theme.borderRadius,
                    }
                  : {}),
              }}
            >
              <Text
                style={{
                  color: theme.mainText,
                  marginBottom: 10,
                  fontFamily: "Roboto-Regular",
                }}
              >
                {firstLetterUppercase(key)}
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                {options.map((option, index) => (
                  <ClickAble
                    key={index}
                    text={option}
                    handleClick={() => {
                      dispatch(
                        setPreferences({
                          [key]: {
                            ...value,
                            selected: option,
                          },
                        })
                      );
                    }}
                    active={selected}
                    first={index === 0}
                    last={index === options.length - 1}
                  />
                ))}
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};
export default function Settings({ navigation }) {
  const preferences = useSelector((state) => state.preferences);
  const { theme: uiTheme, ...rest } = preferences;
  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <Text
        style={{
          marginTop: 20,
          color: theme.seconDaryText,
          fontSize: 14,
          marginBottom: 20,
          fontFamily: "Roboto-Bold",
        }}
      >
        PREFERENCES
      </Text>
      <StackedSettings data={{ ...rest }} />
      <Text
        style={{
          marginTop: 20,
          color: theme.seconDaryText,
          fontSize: 14,
          marginBottom: 20,
          fontFamily: "Roboto-Bold",
        }}
      >
        APPEARANCE
      </Text>
      <StackedSettings data={{ theme: uiTheme }} />
      {/* serves as padding */}
      <View style={{ height: 100 }}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: theme.secondaryBackgroundColor,
    marginHorizontal: 20,
    position: "relative",
    padding: 5,
    borderRadius: 10,
  },
  preferences: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  preferenceName: {},
});
