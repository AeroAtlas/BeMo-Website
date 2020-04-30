import React from "react";
import "./style.css";
import bgImage from "./bemo-logo2.png"

function Nav() {
  return (
    <div id="wrapper">
      <header className="navbar navbar-default navbar-inverse navbar-fixed-top" role="navigation">
        <div id="headwrap">

          <div id="titlelogo">
            <a href="http://cdainterview.com/">
              <div id="logo"><img src="http://cdainterview.com/rw_common/images/bemo-logo2.png" width="167" height="100" alt="Site logo"></img></div>
            </a>
            <a href="/login" rel="self">Log In</a>
          </div>

          <div id="mwrap">
            <div id="lt"></div>
            <div id="lm"></div>
            <div id="lb"></div>
          </div>

          <div id="nwrap">
            <div id="menuBtn"></div>
            <nav>
              <ul className="navigation">
                <li id="current">
                  <a href="/" rel="self" id="current">Main</a>
                </li>
                <li>
                  <a href="/" rel="self">How To Prepare</a>
                </li>
                <li>
                  <a href="/" rel="self">CDA Interview Questions</a>
                </li>
                <li>
                  <a href="/contact" rel="self">Contact Us</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Nav;