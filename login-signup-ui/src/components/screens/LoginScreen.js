import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import LoginForm from "../forms/LoginForm";

export default function LoginScreen(props) {
  return (
    <ImageBackground
      source={{ uri: "https://i.ibb.co/zJ7KY21/HD-wallpaper-neon-effect-patterns-black-bright-dark-technology-punch-hole.jpg" }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <LoginForm {...props} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 190,
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
