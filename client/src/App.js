import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact";
import Main from "./pages/Main";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component{

  render(){
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Main} />\
            <Route exact path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;