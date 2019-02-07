import React from "react";
import "./../App.css";

const DrawerToggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <div className="toggle-button_line" />
    <div className="toggle-button_line" />
    <div className="toggle-button_line" />
  </button>
);

export default DrawerToggleButton;