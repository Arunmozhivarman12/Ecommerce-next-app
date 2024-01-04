'use client'

const Products = [
    {
        id: 1,
        name: "Laptop 1",
        image: "/img/product01.png",
        Price: "40,000",
        Category: "Laptops"
    },
    {
        id: 2,
        name: "Headphone",
        image: "/img/product02.png",
        Price: "5,000",
        Category: "Headphones"

    },
    {
        id: 3,
        name: "Laptop 2",
        image: "/img/product03.png",
        Price: "55,000",
        Category: "Laptops"
    },
    {
        id: 4,
        name: "Tab",
        image: "/img/product04.png",
        Price: "15,000",
        Category: "Tabs"
    }, {
        id: 5,
        name: "Headphone 2",
        image: "/img/product05.png",
        Price: "20,000",
        Category: "Headphones"
    }, {
        id: 6,
        name: "Laptop 3",
        image: "/img/product06.png",
        Price: "45,000",
        Category: "Laptops"
    },
    {
        id: 7,
        name: "Mobile 1",
        image: "/img/product07.png",
        Price: "22,000",
        Category: "Mobiles"
    },
    {
        id: 8,
        name: "Laptop 4",
        image: "/img/product08.png",
        Price: "60,000",
        Category: "Laptops"
    },
    {
        id: 9,
        name: "camera 1",
        image: "/img/product09.png",
        Price: "30,000",
        Category: "cameras"
    },
    {
        id: 10,
        name: "camera 2",
        image: "/img/product01.png",
        Price: "40,000",
        Category: "cameras"
    }
]

const ProductReducer = (state=Products,action) =>{
    switch(action.type){
        case "PRODUCT_LIST":
            return state;
        default:
            return state
    }
}

export default ProductReducer;