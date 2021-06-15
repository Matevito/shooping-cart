import React, { useEffect, useState } from "react"

const ProductPage = ({ match }) => {
    const [productData, set_productData] = useState({})
    const productId = match.params.id

    useEffect(()=> {
        fetchProductData()
    }, [])

    const fetchProductData = () => {
        fetch("https://fakestoreapi.com/products/"+productId, {mode:"cors"})
        .then(response => response.json())
        .then(pData => set_productData(pData))
    }

    return(
        <div className="row">

            
        </div>
    )
}

export default ProductPage