const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ALL_ORDERS":
      //   return { ...state, ...payload };
      //this is an object!!!!
      return [...payload];

    default:
      return state;
  }
};
