import React from "react";
import { Switch, HashRouter, Route } from "react-router-dom";
import Home from "./components/home-v2";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
