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
        <View>
            <Text>{this.state.Data.length}Shit</Text>
            {this.state.Data.length % 2 === 1 ? (
                <FlatList
                    data = {this.state.Data}
                    renderItem= {(({item, i}) => {
                        return(
                            <View key={i} style={styles.item_flatlist2}>
                                <Image 
                                    source={item.image} {...this.props}
                                    style={styles.imageThumbnail2}
                                />
                                <Text>{item.english}</Text>
                            </View>
                        )
                    })}
                    numColumns={1}
                    keyExtractor={(item, index) => index.toString()}
                />
            ):(
                <FlatList
                    data = {this.state.Data}
                    renderItem= {(({item, i}) => {
                        return(
                            <View key={i} style={styles.item_flatlist}>
                                <Image 
                                    source={item.image} {...this.props}
                                    style={styles.imageThumbnail}
                                />
                                <Text>{item.english}</Text>
                            </View>
                        )
                    })}
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                />
            )}
        </View>
    )
        
    }
}

const styles = StyleSheet.create({
    item_flatlist:{
        flex: 1,
        flexDirection: 'column', 
        margin: 1, 
        width: "30%", 
        alignItems: "center"
    },
    item_flatlist2:{
        flex: 1,
        flexDirection: 'column', 
        margin: 1, 
        width: "100%", 
        alignItems: "center"
    },
    font:{
        textAlign: "center"
    },
    imageThumbnail:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 130,
        maxWidth: "100%",
        maxHeight: "100%",
    },
    imageThumbnail2:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        maxWidth: "100%",
        maxHeight: "100%",
    }
})