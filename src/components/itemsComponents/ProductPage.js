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
        <div className="container">
            <div className="row">
            
                    {/* product image display */}
                <div className="col ">
                    <img src={productData.image} 
                    style={{maxWidth:350, maxHeight:350}}
                    alt="product_img"
                    className="card-image rounded mx-auto d-block"></img>
                </div>  
                <div className="col ">
                    {/* buying product info*/}
                    <h1>{productData.title}</h1>
                    <h3>Product info:</h3>
                    <div>{productData.description}</div>
                    <h2>Price: <span>${productData.price}</span></h2>
                    
                    {/* buying event */}
                    
                </div>
                
            </div>
        </div>
    )
}

export default ProductPage