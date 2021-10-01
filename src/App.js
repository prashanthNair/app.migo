import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home-v2";
import About from "./components/about";
import Contact from "./components/contact";
import Sollutions from "./components/work-processing";
import TrainingListingPage from "./components/job-listing";
import TrainingDetailsPage from "./components/job-details";
import Brands from "./components/home-v4";
import Buddy from "./components/home-v7";
import MigoApp from "./components/home-v3";
import Terms from "./components/terms-components/terms";

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
        <Route exact path="/brands" component={Brands} />
        <Route exact path="/buddy" component={Buddy} />
        <Route exact path="/app" component={MigoApp} />
        <Route exact path="/terms" component={Terms} />
      </Switch>
    </div>
  );
}

export default App;
