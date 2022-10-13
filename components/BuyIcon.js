import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";


export const BuyIcon = ({navigation}) => {

    return(
        <View style={styles.container}>
            <Text style={styles.text} onPress={() => {navigation.navigate('Payment')}}>
                Purchase
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        marginHorizontal: 8,
        backgroundColor: 'orange',
        height: 39,
        padding: 12,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13
    }
    
})