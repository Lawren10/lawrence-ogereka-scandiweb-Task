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
        let itemid = cart[item].id;
        let newPrice = price[itemid];
        let amount = price[itemid].amount;
        amount = cart[itemid].quantity * amount;

        state.cart[itemid].price = newPrice;
        state.cartTotal += Math.round(amount);
      }
      state.tax = Math.round(state.cartTotal * 0.21);
    }
  },

  setSelectedItem: (state, action) => {
    let { name, num } = action.payload;
    state.selectedproduct.selectedAttribute[name] = num;
  },

  setLoadPrice: (state) => {
    state.loadPrice = false;
  },

  setActive: (state, action) => {
    state.Active = action.payload;
  },

  setsingleProductId: (state, action) => {
    state.singleProductId = action.payload;
  },
  setSelectedProduct: (state, action) => {
    state.selectedproduct = action.payload;
  },

  addToCart: (state, action) => {
    let { id, currentProduct } = action.payload;

    let { amount } = currentProduct.price;

    state.cart[id] = currentProduct;
    state.itemsInCart += 1;
    state.totalCartProductQuantity = state.totalCartProductQuantity + 1;
    state.cartTotal += Math.round(amount);
    state.tax = Math.round(state.cartTotal * 0.21);
  },

  setShowCurrencyList: (state) => {
    state.showCurrencyList = !state.showCurrencyList;
  },

  setShowCartOverlay: (state) => {
    state.showCartOverlay = !state.showCartOverlay;
  },

  setGeneratedId: (state, action) => {
    state.generatedId = action.payload;
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

  increaseSameProductQuantity: (state, action) => {
    let { id, amount } = action.payload;
    state.cart[id].quantity += 1;
    state.cartTotal += Math.round(amount);
    state.tax = Math.round(state.cartTotal * 0.21);
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
