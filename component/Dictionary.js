/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { StyleSheet, ScrollView, View, Text, TextInput, Button, TouchableOpacity, Image, Modal, ImageBackground } from "react-native";/* eslint-disable no-trailing-spaces */
import AsyncStorage from '@react-native-community/async-storage';
import Data from './Materi';

export default class Dictionary extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false
        };
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Dictionary',
            headerRight: (
                <TouchableOpacity onPress={navigation.getParam('OptionClick')}>
                    <Image
                        source={require('./image/option.png')}
                        style={{ width: 20, height: 20, marginRight: 10 }}
                    />
                </TouchableOpacity>
            )
        }
    }

    componentDidMount = () => {
        this.props.navigation.setParams({ logOut: this.logOut, OptionClick: this.OptionClick });
    }

    logOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }

    OptionClick = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render(){
        return(
            <View style={styles.container}>
            <Modal
                animationType="fade" 
                transparent={false} 
                visible={this.state.modal} 
                onPress={() => this.OptionClick}>
                <View style={styles.container_modal}>
                    <Text style={{textAlign: "center"}}>Wanna Quit</Text>
                    <View style={styles.modal_btn}>
                        <Button 
                            title="Cancel" 
                            onPress={this.OptionClick}
                        />
                        <Button 
                            title="Log Out" 
                            onPress={this.logOut}
                            color="red"
                        />
                    </View>
                </View>
            </Modal>
                <TouchableOpacity style={styles.item_Home} onPress={() => this.props.navigation.navigate('Data_Materi', {Data: Data.Fruits})}>
                    <View style={{width: "100%", justifyContent: "center", alignItems: "center"}}>
                        <Image source={require('./image/fruits.png')}  style={{maxWidth: "80%", maxHeight: "80%", width: "100%"}}/>
                        <Text style={styles.fonts}>Fruits {Data.Fruits.length}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item_Home} onPress={() => this.props.navigation.navigate('Data_Materi', {Data: Data.Hobby})}>
                    <View style={{width: "100%", justifyContent: "center", alignItems: "center"}}>
                        <Image source={require('./image/Hobby.png')}  style={{maxWidth: "80%", maxHeight: "80%", width: "100%"}}/>
                        <Text style={styles.fonts}>Hobby</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item_Home} onPress={() => this.props.navigation.navigate('Data_Materi', {Data: Data.Animals})}>
                    <View style={{width: "100%", justifyContent: "center", alignItems: "center"}}>
                        <Image source={require('./image/Animals.png')}  style={{maxWidth: "80%", maxHeight: "80%", width: "100%"}}/>
                        <Text style={styles.fonts}>Animals</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        display: "flex", 
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%"
    },
    container_modal:{
        alignSelf: "center", 
        justifyContent: "center", 
        backgroundColor: "transparent", 
        width: "100%", 
        height: "100%"
    },
    modal_btn:{
        flexDirection: "row",
        display: "flex",
        width: "70%",
        justifyContent: "space-around",
        alignItems: "center",
        alignSelf: "center",
        marginVertical: 30
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
    }
})