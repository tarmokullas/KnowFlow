import React from "react";
import "./../App.css";
import "./DrawerToggleButton";
import DrawerToggleButton from "./DrawerToggleButton";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div />
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_logo">
        <a href="/">KNOWFLOW</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation_items">
        <ul>
          <li>
            <a href="/">Homepage</a>
          </li>
          <li>
            <a href="/">Product</a>
          </li>
          <li>
            <a href="stats.html">Statistics</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
