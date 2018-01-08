import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../mappers/CounterMapper";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.value,
      dval: props.time
    };
  }

  render() {
    const { key, time, value, onIncreaseClick, onDebounceChange } = this.props;

    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button style={{ height: 35 }} onClick={onIncreaseClick(key, time)}>
            Increase
          </button>
          <span style={{ marginLeft: 5 }}>{value}</span>
        </div>
        <label>Debounce time (ms): </label>
        <input value={time} onChange={onDebounceChange} />
      </div>
    );
  }
}

Counter.defaultProps = { value: 0, time: 1000 };

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default ConnectedCounter;
