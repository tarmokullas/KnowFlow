import React, { Component } from "react";
import { TextField, validator } from "react-textfield";
import "./../App.css";

class DataComponent extends Component {
  state = {
    timeValue: 0,
    value: "Tegevus.."
  };

  constructor(props) {
    super(props);
    this.HandleAdd = this.HandleAdd.bind(this);
    this.HandleMinus = this.HandleMinus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  HandleAdd() {
    this.setState({ timeValue: this.state.timeValue + 15 });
  }

  HandleMinus() {
    this.setState({ timeValue: this.state.timeValue - 15 });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
    console.log(this.state.value);
  }

  render() {
    document.body.style.backgroundColor = "DeepSkyBlue";

    return (
      <div className="backgroundClass">
        <div className="DataComponent">
          <h1 className="activity">{this.state.value}</h1>
          <h1 className="timeLabel">Aeg: </h1>
          <h1 className="timeValue">{this.state.timeValue}</h1>
          <button
            onClick={this.HandleAdd}
            style={{ fontSize: 50, fontWeight: "bold" }}
            className="btn btn-light m-3"
            id="positiveButton"
          >
            +
          </button>
          <button
            onClick={this.HandleMinus}
            style={{ fontSize: 50, fontWeight: "bold" }}
            className="btn btn-warning"
            id="negativeButton"
          >
            --
          </button>
        </div>
      </div>
    );
  }
}

export default DataComponent;
