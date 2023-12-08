import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

const HomePage = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://w0.peakpx.com/wallpaper/1003/252/HD-wallpaper-neon-effect-patterns-black-bright-dark-technology-punch-hole.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://static.wikia.nocookie.net/dead-ahead-zombie-warfare/images/3/3c/Juggernaut_Critical.gif' }}
          style={styles.gifImage}
        />
        <Text style={styles.headerText}>WELCOME TO MY APP!</Text>
        <Text style={styles.descriptionText}>
          Developed by John Dwight L. Paye
        </Text>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('Landing')}
        >
          <FontAwesome name="sign-out" size={20} color="#fff" style={styles.logoutIcon} />
          <Text style={styles.logoutText}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },
  gifImage: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  descriptionText: {
    fontSize: 15,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  logoutButton: {
    backgroundColor: '#32335F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    padding: 10,
    width: 150,
    height: 50,
    borderRadius: 20,
  },
  logoutIcon: {
    marginRight: 10,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomePage;