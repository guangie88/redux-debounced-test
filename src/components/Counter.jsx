import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../mappers/CounterMapper";

class Counter extends Component {
  render() {
    const { key, time, value, onIncreaseClick } = this.props;

    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button style={{ height: 35 }} onClick={onIncreaseClick(key, time)}>
            Increase
          </button>
          <span style={{ marginLeft: 5 }}>{value}</span>
        </div>
        <small>Debounce time: {time} ms</small>
      </div>
    );
  }
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default ConnectedCounter;
