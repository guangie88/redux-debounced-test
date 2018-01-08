import { INCREASE, DEBOUNCE_CHANGE } from "../actions/action";

export const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case DEBOUNCE_CHANGE:
      return { ...state, dval: action.dval };
    default:
      return state;
  }
};
