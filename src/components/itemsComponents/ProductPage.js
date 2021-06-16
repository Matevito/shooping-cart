import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "../CartContext"

const ProductPage = ({ match }) => {
    const [productData, set_productData] = useState({})
    const productId = match.params.id
    const [cart, set_cart] = useContext(CartContext)

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
                    <form>
                        <input type="number"></input>
                        <button className="btn btn-primary">Add to cart</button>
                    </form>
                    
                </div>
                
            </div>
        </div>
    )
}

export default ProductPage