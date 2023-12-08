import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LandingPage = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://w0.peakpx.com/wallpaper/1003/252/HD-wallpaper-neon-effect-patterns-black-bright-dark-technology-punch-hole.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image source={{ uri: 'https://i.ibb.co/zPwWBcF/logo.png' }} style={styles.logo} />
        <Text style={styles.title}>GETTING TO KNOW</Text>

        <TouchableOpacity
          style={[
            styles.buttonContainer,
            {
              borderColor: '#32335F',
              borderWidth: 1,
              width: 200,
              backgroundColor: '#32335F', 
              ...Platform.select({
                ios: {
                  shadowColor: 'black',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.5,
                  shadowRadius: 2,
                },
                android: {
                  elevation: 2,
                },
              }),
            },
          ]}
          onPress={() => navigation.navigate('Login')}
        >
          <Icon name="login" size={20} color="#fff" style={styles.icon} />
          <Text style={[styles.buttonText, { color: '#fff' }]}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.buttonContainer,
            {
              borderColor: '#32335F',
              borderWidth: 1,
              width: 200,
              backgroundColor: '#32335F', 
              ...Platform.select({
                ios: {
                  shadowColor: 'black',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.5,
                  shadowRadius: 2,
                },
                android: {
                  elevation: 2,
                },
              }),
            },
          ]}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Icon name="account-plus" size={20} color="#fff" style={styles.icon} />
          <Text style={[styles.buttonText, { color: '#fff' }]}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 10,
  },
  backgroundImage: {
    flex: 1, 
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default LandingPage;
