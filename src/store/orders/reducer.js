const initialState = {
  orderId: 1,
  userId: 1,
  productIds: [1, 3],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
