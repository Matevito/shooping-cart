import React, { useState, useContext } from "react"
import { CartContext } from "./CartContext"

const Cart  = () => { 
    const [cart, set_cart] = useContext(CartContext)
    return(
        <div>
            <span>cart</span>
            <p></p>
        </div>
    )
}

export default Cart