import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
} from 'react-native';


import logo from './assets/logo.png'
import bg from './assets/background.jpg'


export default class Test extends Component {
  render() {
    return (
      <ImageBackground source={bg} style={styles.bgContainer}>
        <View style={styles.logoContainer}>
          <Text>Open up App.js to start working on your app!</Text>
          <Image source={logo} style={styles.logo}/>
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    );
  }
}


//Styles for this page
const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoContainer: {
    alignItems: 'center',
  }
});
