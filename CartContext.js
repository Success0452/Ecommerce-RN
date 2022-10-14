import React, {createContext, useState} from "react";
import { getProduct } from "./ProductService";

export const CartContext = createContext();

export const CartProvider = (props) => {

    const [items, setItems] = useState([]);

    const addItemToCart = (id) => {
        const product = getProduct(id);
        setItems((data) => {
            const item = data.find((item) => item.id == id);
            if(!item){
                return [...data, {id, qty: 1, product, totalPrice: product.price}]
            }else{
               return data.map((item) => { 
                if(item.id == id){ 
                    item.qty++, 
                    item.totalPrice += product.price; 
                }
            return item;
           })
            }
        })
    }

    const getItemsCount = () => {
        return items.reduce((sum, item) => (sum + item.qty), 0);
    }

    const getTotalPrice = () => {
        return items.reduce((sum, item) => (sum + item.totalPrice), 0)
    }

    const clearItem = () => {
        for(let i = 0; i < items.length; i++){
            items.pop()
        }
        console.log(items);
        return items;
    }

    return(
        <CartContext.Provider value={{items, getItemsCount, getTotalPrice, addItemToCart, clearItem}} >
            {props.children}
        </CartContext.Provider>
    )

}