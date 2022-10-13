import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, View, SafeAreaView, Button, ScrollView, Image, Text } from "react-native";
import { getProduct } from "../ProductService";
import { CartContext } from "../CartContext";

export const ProductDetails = ({route}) => {

    const { addItemToCart} = useContext(CartContext);

    const {productId} = route.params;
    const [product, setProduct] = useState({}); 

    const onAddItemToCart = () => {
        addItemToCart(product.id);
    }
    
    useEffect(() => {
        setProduct(getProduct(productId));
    })

    return(
       <SafeAreaView>
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={product.image}/>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.name}> {product.name} </Text>
                <Text style={styles.price}> # {product.price} </Text>
                <Text style={styles.description}> {product.description} </Text>
                <Button title="Add to Cart" onPress={onAddItemToCart}/>
            </View>
        </ScrollView>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 300,
        aspectRatio: 1
    },
    infoContainer: {
        padding: 16
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        color: '#787878',
        marginBottom: 16

    }
})