import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: [],
      values: "",
    };
  }
  updateValue = () => {
    this.setState({
      name: [...this.state.name, this.state.values],
      values: "",
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Only add Value</h1>
        <h3>Name: {this.state.name}</h3>
        <input
          value={this.state.values}
          type="text"
          onChange={(text) => this.setState({ values: text.target.value })}
          placeholder="Enter your Name"
        />
        <br />
        <button onClick={() => this.updateValue()}>Update Name</button>
      </div>
    );
  }
}
export default App;
