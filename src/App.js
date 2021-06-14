import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home  from "./components/Home";
import Store from "./components/Store";


function App() {
  return (
    <div className="conteiner-flex">
      <Router>
        <Navbar />

        <Switch>
          {/* app paths*/}
          <Route exact path="/" component={Home} />
          <Route path="/store" component={Store} />

        </Switch>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
