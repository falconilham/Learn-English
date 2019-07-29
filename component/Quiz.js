/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { StyleSheet, ScrollView, View, Text, TextInput, Button, TouchableOpacity, Image, Modal, ImageBackground } from "react-native";
import Soal from './Soal.json'

export default class Quiz extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            soal: [],
            number: 0
        }
    }
    UNSAFE_componentWillMount = () => {
        let soal_array = Soal.slice();
        let random = Math.floor(Math.random() * soal_array.length)
        for(var x = 0; x < 20; x++){
            this.state.soal.push(soal_array[Math.floor(Math.random() * soal_array.length)])
            soal_array.splice(soal_array[random], 1)
        }
    }
    render(){
        const ribet = this.state
        return(
            <View>
                <Text>{ribet.number}</Text>
                <Text>{ribet.soal[ribet.number].Soal}</Text>
                <Button onPress={() => this.setState({number : ribet.number + 1})} title="Next Soal"></Button>
            </View>
        )
    }
}