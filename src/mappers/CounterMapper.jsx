import { increase, debounceChange } from "../actions/action";

export const mapStateToProps = state => {
  return {
    value: state.count,
    time: state.dval
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    onIncreaseClick: (key, time) => () => dispatch(increase(key, time)),
    onDebounceChange: e => dispatch(debounceChange(e.target.value))
  };
};
