import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getProducts } from '../ProductService';
import { Product } from '../components/Product';

export const ProductList = ({navigation}) => {

    const [products, setProducts] = useState([]);

    const renderProduct = ({item: product}) => {
        return(
            <Product 
            {...product}
            onPress={() => { navigation.navigate('ProductDetails', {productId: product.id})}}
            />
        )
    }

    useEffect(() => {
        setProducts(getProducts());
    })

    return(
        <FlatList 
        style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={(item) => item.id.toString()}
        data={products}
        renderItem={renderProduct}
        />
    );

}

const styles = StyleSheet.create({
    productsList: {
        backgroundColor: '#eeeeee'
    },
    productsListContainer: {
        backgroundColor: '#eeeeee',
        paddingVertical: 8,
        marginHorizontal: 8
    }
})