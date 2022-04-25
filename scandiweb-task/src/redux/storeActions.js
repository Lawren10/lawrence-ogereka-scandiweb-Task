const shopActions = {
  setCurrency: (state, action) => {
    state.currencies.selectedCurrency = action.payload;
  },
};

export default shopActions;
