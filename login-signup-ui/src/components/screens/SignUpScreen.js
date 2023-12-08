import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import SignUpForm from "../forms/SignUpForm";

const SignUpScreen = (props) => {
  return (
    <ImageBackground
      source={{ uri: 'https://i.ibb.co/zJ7KY21/HD-wallpaper-neon-effect-patterns-black-bright-dark-technology-punch-hole.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <SignUpForm {...props} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 120,
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default SignUpScreen;
