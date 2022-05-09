const shopActions = {
  setCurrency: (state, action) => {
    state.currencies.selectedCurrency = action.payload;
  },
  setShopCurrency: (state, action) => {
    let cart = state.cart;
    let price = action.payload;
    state.displayPrice = action.payload;
    if (Object.keys(cart).length > 0) {
      state.cartTotal = 0;
      for (let item in cart) {
        let newPrice = price[item];
        let amount = price[item].amount;
        amount = cart[item].quantity * amount;

        state.cart[item].price = newPrice;
        state.cartTotal += Math.round(amount);
      }
      state.tax = Math.round(state.cartTotal * 0.21);
    }
  },

  setSelectedItem: (state, action) => {
    let { id, name, num } = action.payload;
    state.cart[id].selectedAttribute[name] = num;
  },

  setsingleProductId: (state, action) => {
    state.singleProductId = action.payload;
  },
  setSelectedProduct: (state, action) => {
    state.selectedproduct = action.payload;
  },
  changeQuantity: (state, action) => {
    let { id, num, amount, func } = action.payload;

    state.cart[id].quantity = num;
    if (func === "increase") {
      state.cartTotal += Math.round(amount);
      state.tax = Math.round(state.cartTotal * 0.21);
    }
    if (func === "decrease") {
      state.cartTotal -= Math.round(amount);
      state.tax = Math.round(state.cartTotal * 0.21);
    }
  },

  deleteFromCart: (state, action) => {
    delete state.cart[action.payload.id];
    state.itemsInCart--;
    state.totalCartProductQuantity--;
    state.cartTotal -= Math.round(action.payload.amount * action.payload.num);
    state.tax = Math.round(state.cartTotal * 0.21);
  },

  increaseTotalQty: (state, action) => {
    state.totalCartProductQuantity += 1;
  },
  decreaseTotalQty: (state, action) => {
    state.totalCartProductQuantity -= 1;
  },
};

export default shopActions;
