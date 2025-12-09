export const cardReducer = (state = [], action) => {
  switch(action.type) {
    case "card/addToCart":
      const product = state.find(item => item.id === action.payload.id);
      if(product){
        return state.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...state,
        { 
          ...action.payload, 
          quantity: 1,
          price: Number(action.payload.price)
        }
      ];

    case "cart/modifyQuantity":
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: Number(action.payload.quantity) }
          : item
      );

    case "cart/removeProduct":
      return state.filter(item => item.id !== action.payload);

    case "cart/clearCart":
      return [];

    default:
      return state;
  }
};
