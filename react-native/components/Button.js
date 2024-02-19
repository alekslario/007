import { Pressable, StyleSheet } from "react-native";
export const Button = ({ children, style = {}, ...rest }) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...styles.button,
        ...style,
        ...{ opacity: pressed ? 0.5 : 1 },
      })}
      {...rest}
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

export default Button;
