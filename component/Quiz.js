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
            number: 0,
            nilai: 0
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
            header: null,
            gesturesEnabled: false,
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

    cekNilai = (e,i,item) => {
        if(item === this.state.soal[this.state.number].jawaban_benar){
            this.setState({
                nilai: this.state.nilai + 1 * 10 / 2
            })
        }else{
            this.setState({
                nilai: this.state.nilai + 0 * 10 / 2
            })
        }
        if(this.state.number === 19){
            alert("selesai Nilai Anda " + this.state.nilai)
        }else{
            this.setState({
                number: this.state.number + 1
            })
        }
    }
    render(){
        const ribet = this.state
        return(
            <View style={styles.container}>
                <Text style={{fontWeight: "bold", justifyContent:"flex-start",top: 0, position: "absolute",marginHorizontal: 10 , alignSelf:"flex-start", color: "white"}}>Silakan Mengerjakan</Text>
                <View style={styles.form_soal}>
                    <Text>{ribet.number + 1}.{ribet.soal[ribet.number].Soal}</Text>
                </View>
                <View style={styles.form_jawaban}>
                    <View style={{flex : 1, flexDirection: 'row', flexWrap: "wrap", alignItems: 'flex-start', justifyContent: "space-around"}}>
                        {ribet.soal[ribet.number].jawaban.map((item, i ) => {
                            return(
                                <View key={i} style={{width: "35%", marginVertical: 10, marginTop: 20}}>
                                    <Button onPress={() => this.cekNilai(this, i, item)} title={item} />
                                </View>
                            )
                            })}
                    </View>
                </View>
                <View style={{bottom: 100, position: "absolute", color: "white"}}>
                    <Text>Good Luck</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor : "#20639B"
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: "blue"
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    login_name: {
      height: 40,
      backgroundColor: "red",
      width: "80%",
      margin: 10,
      backgroundColor:"#eae9e9",
      marginVertical: 25,
    },
    button_login:{
      width: "30%",
    },
    font_login:{
      color:"black"
    },
    form_login:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:"white",
      height: "50%",
      width: "80%",
      borderRadius: 30,
      shadowColor: "#000",
      shadowOffset :{
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    form_jawaban:{
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:"white",
      height: "35%",
      width: "80%",
      borderRadius: 10,
    },
    form_soal:{
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:"white",
      height: "10%",
      width: "80%",
      marginBottom: 30,
      borderRadius: 10
    }
});