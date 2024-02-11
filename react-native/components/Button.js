import { Pressable, StyleSheet } from "react-native";
export const Button = ({ children, action = () => {}, style = {} }) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...styles.button,
        ...style,
        ...{ opacity: pressed ? 0.5 : 1 },
      })}
      onPress={action}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    ...GlobalStyles.lightTheme,
    padding: 10,
  },
});
