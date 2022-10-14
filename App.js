import React from "react";
import { StyleSheet, View, Text, } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductList } from "./screens/ProductList";
import { ProductDetails } from './screens/ProductDetails';
import { Cart } from "./screens/Cart";
import { CartProvider } from "./CartContext";
import { CartIcon } from "./components/CartIcon";
import { BuyIcon } from "./components/BuyIcon";
import { Purchase } from "./screens/Purchase";

const Stack = createNativeStackNavigator();

 const App = () => {
  return(
    <CartProvider>
      <NavigationContainer >
    <Stack.Navigator initialRouteName="Products">
    <Stack.Screen name="Products" component={ProductList} 
    options={({navigation}) => ({title: 'Products', 
    headerRight: () => <CartIcon navigation={navigation} />})}
    />
    <Stack.Screen name="ProductDetails" component={ProductDetails} 
    options={({navigation}) => ({title: 'ProductDetails', headerRight: () => <CartIcon navigation={navigation} />})}
    />
    <Stack.Screen name="Cart" component={Cart} 
     options={({navigation}) => ({
      title: 'Cart',
      headerTitleAlign: 'center',
      headerRight: () => <CartIcon navigation={navigation} />, 
      headerLeft: () => <BuyIcon navigation={navigation} />})}
    />
    <Stack.Screen name="Purchase" component={Purchase} options={{headerShown: true}}/>
    </Stack.Navigator>
  </NavigationContainer>
    </CartProvider>
  )
}

export default App;

