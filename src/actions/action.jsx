export const INCREASE = "INCREASE";
export const DEBOUNCE_CHANGE = "DEBOUNCE_CHANGE";

export const increase = (key, time) => ({
  type: INCREASE,
  meta: {
    debounce: {
      time: time,
      key: key
    }
  }
});

export const debounceChange = dval => {
  return {
    type: DEBOUNCE_CHANGE,
    dval: dval
  };
};
