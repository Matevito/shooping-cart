import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
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
                return (
                    <Link to={"/store/"+product.id} className="col-sm-1 col-md-4"
                    style={{textDecoration:"none", color:"inherit"}}>
                        <ProductCard key={product.id} 
                        product_data={product}/>
                    </Link>
                )

            })}
        </div>
    )
}

export default Store