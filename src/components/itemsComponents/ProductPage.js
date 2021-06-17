import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "../CartContext"

const ProductPage = ({ match }) => {
    const [productData, set_productData] = useState({})
    const productId = match.params.id

    const [cart, set_cart] = useContext(CartContext)

    const [productCart, set_productCart] = useState({})

    const [productQuantity, set_productQuantity] = useState(0)

    useEffect(()=> {
        fetchProductData()
        //load quantity



        set_productCart({
            product_id:productId,
            quantity:productQuantity
        })
    }, [])

    const fetchProductData = () => {
        fetch("https://fakestoreapi.com/products/"+productId, {mode:"cors"})
        .then(response => response.json())
        .then(pData => set_productData(pData))
    }

    const handleQuantity = (event) => {
        set_productQuantity(event.target.value)
        set_productQuantity(c_value => {
                set_productCart({
                    product_id:productId,
                    quantity:c_value
                })
            return c_value
        })
    }

    const product_toCart = (event) => {
        event.preventDefault()
        
        //
        let c_productInCart = cart.filter(prod => prod.product_id === productCart.product_id)

        if (c_productInCart.length === 0){
            let new_cart = cart.concat(productCart)
            set_cart(new_cart)
        }else{
            //actualize the product
            let new_cart = cart.map(product => {
                if(product.product_id === productCart.product_id){
                    return productCart
                }
                return product
            })
            set_cart(new_cart)
            //add the product
        }
    }

    const showCart = () => {
        console.log(cart)
    }

    return(
        <div className="container">
            <div className="row">
                <button onClick={showCart}>Cart</button>
            
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
                    <form onSubmit={product_toCart}>
                        <input type="number"
                        value={productQuantity}
                        onChange={handleQuantity}>
                        </input>
                        <button className="btn btn-primary">Add to cart</button>
                    </form>
                    
                </div>
                
            </div>
        </div>
    )
}

export default ProductPage