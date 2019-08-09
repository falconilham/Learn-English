/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { PureComponent } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image, ImageBackground, Button } from "react-native";

export default class Score extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nilai : this.props.navigation.state.params.nilai
        }
    }
    render(){
        return(
            <View>
               <ImageBackground source={require('./image/menu.jpg')} style={styles.container}>
                <TouchableOpacity style={styles.item_Home} >
                        <View style={{width: "80%", height: "80%"}}>
                            <Text style={styles.fonts}>Your Score Is</Text>
                            <Text style={styles.Score}>{this.state.nilai}</Text>
                        </View>
                        <Text>Note :</Text>
                        {this.state.nilai >= 0 && this.state.nilai <= 49 ? (
                            <View>
                                <Text style={styles.Note}>Bodoh Sekali</Text>
                            </View>
                        ):(
                            <View>
                                <Text style={styles.Score}>Mantap</Text>
                            </View>
                        )}
                    </TouchableOpacity>
                    <Button onPress={() => this.props.navigation.navigate('Home')} title="Back To Home" />
               </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        display: "flex", 
        flexDirection: "column",
        alignItems: "center",
        justifyContent:"center",
        width: "100%",
        height: "100%",
        backgroundColor: "white"
    },
    item_Home:{
        width: "50%", 
        height: "30%", 
        justifyContent: "center", 
        alignItems: "center", 
    },
    fonts:{
        textAlign: "center",
        fontSize: 20
    },
    Score:{
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    },
    Note:{
        textAlign: "center",
        fontSize: 50,
        fontWeight: "bold",
        color:"red"
    }
})