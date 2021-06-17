import React, { useState, useContext } from "react"
import { CartContext } from "./CartContext"

const Cart  = () => { 
    const [cart, set_cart] = useContext(CartContext)

    const getTotal = () => {
        let prices = []
        let product;
        for(product of cart){
            let prodPrice = product.price
            let quantity = product.quantity
            prices.push(quantity*prodPrice)
        }
        if (prices.length === 0){
            return 0
        }
        return prices.reduce((accumulator, currentValue) => accumulator+ currentValue)
    }

    return(
        <div className="container">
            {cart.map(product => {
                return(
                    <div key={product.product_id}>
                        <h1>{product.title}</h1>
                        <div><h2>Price: ${product.price}</h2>
                        <span> Quantity: X{product.quantity}</span>
                        </div>
                        <h2>Subtotal: ${product.price * product.quantity}</h2>
                    </div>
                )
            })}
            <h1>Total: ${getTotal()}</h1>
        </div>
    )
}

export default Cart