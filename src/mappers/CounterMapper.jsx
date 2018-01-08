import { increaseAction } from "../actions/action";

export const mapStateToProps = state => {
  return {
    value: state.count
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  };
};