 import React from "react";
 import { StyleSheet, View, Text, Button } from "react-native";

 export const Purchase = () => {

    return(
        <View style={styles.container}>
            <Text style={styles.text}> Item Successfully Purchased </Text>
        </View>
    )

 }

 const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    text: {
        fontSize: 20,
        fontStyle: 'normal',
        color: 'green',
    }
 })