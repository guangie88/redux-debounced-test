export const INCREASE = "INCREASE";

export const increaseAction = (key, time) => ({
  type: INCREASE,
  meta: {
    debounce: {
      time: time,
      key: key
    }
  }
});
