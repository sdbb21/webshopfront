export const selectFeedLoading = (reduxState) => {
  return reduxState.products.loading;
};

export const selectFeedProducts = (reduxState) => {
  return reduxState.products.products;
};
