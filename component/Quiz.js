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

    UNSAFE_componentWillMount = () => {
        let soal_array = Soal.slice();
        let random = Math.floor(Math.random() * soal_array.length)
        for(var x = 0; x < 20; x++){
            this.state.soal.push(soal_array[Math.floor(Math.random() * soal_array.length)])
            soal_array.splice(soal_array[random], 1)
        }
    }

    GantiSoal = (e,i,item) => {
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
            alert("selesai")
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
                <View style={styles.form_jawaban}>
                    <Text style={styles.font}>{ribet.soal[ribet.number].Soal}</Text>
                    <View style={{flex : 1, flexDirection: 'row', flexWrap: "wrap", alignItems: 'flex-start', justifyContent: "space-around"}}>
                        {ribet.soal[ribet.number].jawaban.map((item, i ) => {
                        return(
                        <View key={i} style={{width: "35%", marginVertical: 20, marginTop: 20}}>
                            <TouchableOpacity onPress={() => alert(item)}>
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        </View>
                        )
                        })}
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent: "space-around",
        alignItems: 'center'
    },  
    form_jawaban:{
        padding: 10,
        backgroundColor:"white",
        height: "35%",
        width: "80%",
        borderRadius: 10,
    },
    font:{
        textAlign: "center"
    }
})