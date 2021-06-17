import React, { useState, useContext } from "react"
import { CartContext } from "./CartContext"

const Cart  = () => { 
    const [cart, set_cart] = useContext(CartContext)

    return(
        <div className="container">
            <button onClick={console.log(cart)}>cart</button>
            {cart.map(product => {
                return(
                    <div key={product.product_id}>
                        <h1>{product.product_id}</h1>
                        <span>x{product.quantity}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Cart