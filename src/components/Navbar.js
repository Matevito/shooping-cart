import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"
import cartImg from "./images/cart.png"

const Navbar = () => {
    //todo: add a shop icon in the jsx
    const [cart, set_cart] = useContext(CartContext)

    const get_productsInCart = () => {
        let quantityes = []
        let product;
        for(product of cart){
            let Pquantity = parseInt(product.quantity)
            quantityes.push(Pquantity)
        }
        if(quantityes.length === 0){
            return ""
        }
        return quantityes.reduce((accumulator, currentValue) => accumulator+ currentValue)
    }
    return(
        <div className="row">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand">Shooping Mall</span>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                        <Link to="/" 
                        style={{textDecoration:"none", color:"inherit"}}>
                            <span className="nav-link">Home</span>
                        </Link>
                        </li>

                        <li className="nav-item">
                        <Link to="/store"
                        style={{textDecoration:"none", color:"inherit"}}>
                            <span className="nav-link">Store</span>
                        </Link>
                        </li>

                        <li className="nav-item">
                        <Link to="/about"
                        style={{textDecoration:"none", color:"inherit"}}>
                            <span className="nav-link">About</span>
                        </Link>
                        </li>

                        <li className="nav-item">
                        <Link to="/cart"
                        style={{textDecoration:"none", color:"inherit"}}>
                            <span className="nav-link"><img src={cartImg} alt="cart_icon" style={{height:30}}></img>
                                <span>{get_productsInCart()}</span>
                            </span>
                        </Link>
                        </li>

                    </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar