import React, {useState, useEffect, useContext} from "react";
import {View, Image, Button, Text, StyleSheet, FlatList} from 'react-native';
import { CartContext } from "../CartContext";

export const Cart = () =>{
    const {items, getItemsCount, getTotalPrice} = useContext(CartContext);

    const Totals = () => {
        const [total, setTotal] = useState(0)
        useEffect(() => {
            setTotal(getTotalPrice())
        })

        return(
            <View style={styles.cartLineTotal}>
                <Text style={[styles.lineLeft, styles.lineTotal]}> Total </Text>
                <Text style={styles.mainTotal}> {total} </Text>
            </View>
        )
    }

    const renderItem = ({item}) => {
        return(
            <>
            <View style={styles.cartLine}>
                <Image style={styles.image} source={item.product.image}/>
                <Text style={styles.lineLeft}> {item.product.name} * {item.qty} 
                <Text style={styles.productTotal}> #{item.totalPrice}</Text>
                </Text>
            </View>
            </>
        )
    }

    return(
        <FlatList 
        style={styles.itemsList}
        contentContainerStyle={styles.itemsListContainer}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.product.id.toString()}
        ListFooterComponent={Totals}
        />
    )
}

const styles = StyleSheet.create({
    itemsListContainer: {
        backgroundColor: '#eeeeee',
        paddingVertical: 8,
        marginBottom: 8
    },
    itemsList: {
        backgroundColor: '#eeeeee'
    },
    mainTotal: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 40,
        color: '#333333',
        textAlign: 'right'
    },
    lineRight: {
        color: '#333333',
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 20
    },
    lineLeft: {
        fontSize: 20,
        lineHeight: 40,
        color: '#333333'
    },
    lineTotal: {
        fontWeight: 'bold'
    },
    productTotal: {
        fontWeight: 'bold'
    },
    cartLineTotal: {
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row'
    },
    image: {
        width: '25%',
        aspectRatio: 1,
        marginRight: 5
    },
    cartLine: {
        flexDirection: 'row',
        width: '80%',
        paddingVertical: 10
    }
})