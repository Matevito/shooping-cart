import React, {useState, createContext} from "react"

export const CartContext = createContext();


export const CartProvideer = (props) => {
    const [cart, set_cart] = useState([])


    return(
        <div>
            <CartContext.Provider>
                {PaymentResponse.children}
            </CartContext.Provider>
        </div>
    )
}