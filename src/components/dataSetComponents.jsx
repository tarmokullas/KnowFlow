import React, { Component } from "react";

class DataSetComponents extends Component {
  state = {
    dataSets: [
      { id: 1, department: "", activity: "", resourceSpent: "", timeValue: "" }
    ]
  };
  render() {
    return (
      <div>
        {this.state.dataSets.map(dataSets => (
          <Counter
            key={dataSets.id}
            department={dataSets.department}
            activity={dataSets.activity}
            resourceSpent={dataSets.resourceSpent}
            timeValue={dataSets.timeValue}
          />
        ))}
      </div>
    );
  }
}

export default DataSetComponents;
