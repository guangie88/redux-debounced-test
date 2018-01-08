import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../mappers/CounterMapper";

class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props;
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <button style={{ height: 35 }} onClick={onIncreaseClick}>
          Increase
        </button>
        <span style={{ marginLeft: 5 }}>{value}</span>
      </div>
    );
  }
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default ConnectedCounter;
