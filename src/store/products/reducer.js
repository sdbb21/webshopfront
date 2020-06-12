const initialState = {
  id: null,
  name: null,
  description: null,
  price: null,
  imageUrl: null,
  categoryId: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
