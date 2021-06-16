import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home  from "./components/Home";
import Store from "./components/Store";
import ProductPage from "./components/itemsComponents/ProductPage"
import About from "./components/About"
import Cart from "./components/Cart"
import { CartProvider } from "./components/CartContext"


function App() {

  return (
    <div className="conteiner-flex">
      <Router>
        {/*cart context provider*/}
        <CartProvider>
          <Navbar />

          <Switch>
            {/* app paths*/}
            <Route exact path="/" component={Home} />
            <Route exact path="/store" component={Store} />
            <Route exact path="/store/:id" component={ProductPage}/>

            <Route path="/about" component={About} />
            <Route path="/cart" component={Cart} />

          </Switch>
        </CartProvider>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
