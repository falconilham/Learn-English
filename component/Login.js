/* eslint-disable no-trailing-spaces */
/* eslint-disable no-labels */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, ScrollView, View, Text, TextInput, Button, Image, ImageBackground } from "react-native";
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import Home from "./Home";
import Quiz from './Quiz';
import Dictionary from './Dictionary';
import AuthLoadingScreen from "./AuthLoadingScreen";
import { TouchableOpacity } from "react-native-gesture-handler";


class Login extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props){
    super(props);
    this.state = {
      nama: ""
    };
  }

  UNSAFE_componentWillMount = async () => {
    try {
      const value = await AsyncStorage.getItem('email');
      if ( value !== null ){
        this.props.navigation.navigate('App');
      }
    } 
    catch (e) {
    }
  }

  login = async () =>  {
    let username = this.state.nama.split("");
    if (username.length === 0 || username.length < 6){
      alert('Nama Tidak Boleh Kurang dari 6 Karakter')
    }
    else {
      await AsyncStorage.setItem('email', this.state.nama);
      this.props.navigation.navigate('App');
    }
  }

  render() {
    return (
      <ImageBackground imageStyle={{ opacity: 0.5 }} blurRadius={1} source={require('./image/bg.jpg')} style={styles.container}>
        <Text style={styles.Text}>Login</Text>
        <TextInput style={styles.LoginInput} onChangeText={(nama) => this.setState({nama})} />
        <TouchableOpacity style={{width: "80%"}}> 
          <Button style={styles.BtnLogin} title="Login" onPress={() => this.login()} color="transparent"/>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  LoginInput:{
    backgroundColor: "transparent", 
    borderBottomColor: "white", 
    borderBottomWidth: 1,
    width: "80%",
    color: "white",
    marginVertical: 30,
    height: "auto"
  },
  Text:{
    color: "white",
    fontFamily: "Raleway-bold"
  },
  BtnLogin:{
    width: "50%", 
    color: "white",
    marginVertical: 5,
    borderWidth: 20,
    borderColor: "white"
  }
});

const AppStack = createStackNavigator({ Home: Home, Quiz: Quiz, Dictionary: Dictionary});
const AuthStack = createStackNavigator({ SignIn: Login });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));