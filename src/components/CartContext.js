import React, {useState, createContext} from "react"

export const CartContext = createContext();


export const CartProvider = (props) => {
    const [cart, set_cart] = useState([])



    return(
        <div>
            <CartContext.Provider value={[cart, set_cart]}>
                {props.children}
            </CartContext.Provider>
        </div>
    )
}