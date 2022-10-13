const PRODUCT = [
{
    id: 1,
    name: "Apple IPhone 13 Pro Max",
    price: 1000,
    image: require("./assets/images/AS.jpg"),
    description: "always on the highest, always on the highest, always on the highest, always on the highest" 
},
{
    id: 2,
    name: "Android Phone 13 Pro Max",
    price: 2000,
    image: require("./assets/images/AS.jpg"),
    description: "always on the highest, always on the highest, always on the highest, always on the highest" 
},
{
    id: 3,
    name: "Samsung Phone 13 Pro Max",
    price: 6000,
    image: require("./assets/images/AS.jpg"),
    description: "always on the highest, always on the highest, always on the highest, always on the highest" 
},
{
    id: 4,
    name: "Huwali Phone 13 Pro Max",
    price: 4000,
    image: require("./assets/images/AS.jpg"),
    description: "always on the highest, always on the highest, always on the highest, always on the highest" 
},
];

export const getProducts = () => {
    return PRODUCT;
}

export const getProduct = (id) => {
    return PRODUCT.find((value) =>  id === value.id );
}