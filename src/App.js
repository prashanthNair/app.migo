import React from "react";
import { Switch, HashRouter, Route } from "react-router-dom";
import Home from "./components/home-v2";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
