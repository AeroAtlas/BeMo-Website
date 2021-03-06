import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact";
import Main from "./pages/Main";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component{

  render(){
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }

}

export default App;
