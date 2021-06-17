import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"

const Navbar = () => {
    //todo: add a shop icon in the jsx
    const [cart, set_cart] = useContext(CartContext)
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
                            <span className="nav-link">Cart</span>
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