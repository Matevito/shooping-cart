import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home  from "./components/Home";
import Store from "./components/Store";
import ProductPage from "./components/itemsComponents/ProductPage"
import About from "./components/About"
import Cart from "./components/Cart"


function App() {
  return (
    <div className="conteiner-flex">
      <Router>
        <Navbar />

        <Switch>
          {/* app paths*/}
          <Route exact path="/" component={Home} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/store/:id" component={ProductPage}/>

        </Switch>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
