import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/"> 
        Main
      </a>
      <a className="navbar-brand" href="/"> 
        How To Prepare
      </a>
      <a className="navbar-brand" href="/"> 
        CDA Interview Questions
      </a>
      <a className="navbar-brand" href="/contact">
        Contact Us
      </a>
    </nav>
  );
}

export default Nav;