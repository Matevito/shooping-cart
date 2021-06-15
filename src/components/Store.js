import React, { useEffect, useState } from "react"
import ProductCard from "./itemsComponents/ProductCard"

const Store = () => {
    const [productsData, set_productsData] = useState([])

    useEffect(() => {
        fetchStoreData()  
    }, [])

    const fetchStoreData = () => {
        fetch("https://fakestoreapi.com/products", {mode:"cors"})
            .then(response => response.json())
            .then(storeData => set_productsData(storeData))
    }
    return(
        <div className="row">
            <h1 className="text-center">Store products</h1>
            {/* Render the cards*/}
            {productsData.map(product => {
                return <ProductCard key={product.id} 
                product_data={product}/>
            })}
        </div>
    )
}

export default Store