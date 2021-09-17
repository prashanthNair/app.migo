import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home-v2";
import About from "./components/about";
import Contact from "./components/contact";
import Sollutions from "./components/work-processing";
import TrainingListingPage from "./components/job-listing";
import TrainingDetailsPage from "./components/job-details";
import Home_V4 from "./components/home-v4";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/sollutions" component={Sollutions} />
        <Route exact path="/ojt" component={TrainingListingPage} />
        <Route exact path="/ojt/details/:id" component={TrainingDetailsPage} />
        <Route exact path="/home-v4" component={Home_V4} />
      </Switch>
    </div>
  );
}

export default App;
