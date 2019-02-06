import React, { Component } from "react";
import { TextField, validator } from "react-textfield";
import "./dataComp.css";

class DataComponent extends Component {
  state = {
    timeValue: 0,
    mylist: [1, 2, 3]
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
  }

  render() {
    return (
      <div className="DataComponent">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h1>{this.state.value}</h1>
        <h1>Aeg: </h1>
        <h1>{this.state.timeValue}</h1>
        <button
          onClick={this.HandleAdd}
          style={{ fontSize: 50, fontWeight: "bold" }}
          className="btn btn-primary m-3"
        >
          +
        </button>
        <button
          onClick={this.HandleMinus}
          style={{ fontSize: 50, fontWeight: "bold" }}
          className="btn btn-warning"
        >
          --
        </button>
      </div>
    );
  }
}

export default DataComponent;
