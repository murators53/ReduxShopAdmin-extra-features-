const initialState = {
  cart: [],
};

const cartReducer = (state = initialState.cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "add_item":
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
    case "delete_item":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
    case "close_item":
      const exist2 = state.find((x) => x.id === product.id);
      if (exist2.qty > 0) {
        return state.filter((x) => x.id !== exist2.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - x.qty } : x
        );
      }
      /* case "stock_item":
        const exist3 = state.find((x) => x.id === product.id);
        if (exist3.rating.count > 359) {
          return  state.filter((x) => 
          x.id === product )
        } else {
          return  alert('no')
        } */
    default:
      return state;
  }
};

export default cartReducer;
