const initialState = {
  userId: 1,
  productIds: [1, 3],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_PRODUCT":
      return { ...state, productIds: [...state.productIds, payload] };
    case "REMOVE_ITEM":
      const copyOfTheCurrentBasket = state.productIds.filter((item) => {
        if (item !== payload) return item;
      });
      console.log("copyOfTheCurrentBasket", copyOfTheCurrentBasket);
      return { ...state, productIds: copyOfTheCurrentBasket };

    default:
      return state;
  }
};
