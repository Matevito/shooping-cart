import React, { useEffect, useState } from "react"

const ProductPage = (props) => {
    const [productData, set_productData] = useState({})

    useEffect(()=> {
        fetchProductData()
    }, [])

    const fetchProductData = () => {
        fetch("https://fakestoreapi.com/products/",{mode:"cors"})
        .then(response => response.json())
        .then(response => console.log(response))
        .then(pData => set_productData(pData))
    }

    return(
        <div>
            product page
        </div>
    )
}

export default ProductPage