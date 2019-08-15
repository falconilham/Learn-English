/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { StyleSheet, ScrollView, View, Text, Image, FlatList } from "react-native";

export default class Data_Materi extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Data : this.props.navigation.state.params.Data
        }
    }

    render(){
    return(
        <View style={styles.MainContainer}>
            <FlatList
                data = {this.state.Data}
                renderItem= {(({item, i}) => {
                    return(
                        <View key={i} style={styles.item_flatlist}>
                            <Image 
                                source={item.image} {...this.props}
                                style={styles.imageThumbnail}
                            />
                            <Text style={styles.font}>{item.english} = {item.indonesia}</Text>
                        </View>
                    )
                })}
                numColumns={1}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
        
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: "center",
        flex: 1,
        paddingTop: 30,
    },
    item_flatlist:{ 
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: "center",
        alignItems:"center",
        marginVertical: 21,
        height: 450,
    },
    font:{
        textAlign: "center"
    },
    imageThumbnail:{
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: "100%",
        maxWidth:"100%"
    }
})