import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="conteiner-flex">
      <Router>
        <Navbar />

        <Switch>
          {/*Here go the app routes*/}
        </Switch>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
