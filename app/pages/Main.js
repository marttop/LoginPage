import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
} from 'react-native';


import logo from '../assets/logo.png'
import bg from '../assets/background.jpg'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';


export default class Test extends Component {
  render() {
    return (
      <ImageBackground source={bg} style={styles.bgContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={textStyles.titleText}>Login{"\n"}</Text>
          <TextInput placeholder={"Email"} style={styles.customField} />
          <TextInput placeholder={"Password"} style={styles.customField} />
          <TouchableOpacity style={styles.customButton}>
            <Text style={{ color: "white", fontSize: 18}}>
              Login
            </Text>
          </TouchableOpacity>
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
    width: 200,
    height: 200,
    margin: 30,
  },
  logoContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10
  },
  customField: {
    borderColor: "red",
    borderWidth: 2,
    width: 300,
    height: 40,
    paddingLeft: 7,
    margin: 10,
  },
  customButton: {
    width: 300,
    borderRadius: 15,
    borderWidth: 1,
    height: 30,
    backgroundColor: 'red',
    margin: 20,
    alignItems: 'center'
  }
});

const textStyles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "red"
  }
});
