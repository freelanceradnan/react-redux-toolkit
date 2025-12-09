
import { createReducer } from "@reduxjs/toolkit";
import { addToCart,modifyQuantity,clearCart,removeProduct } from "../createAction/cartCreateAction";
export const CartReducer=createReducer([],(builder)=>{
  builder
  .addCase(addToCart,(state,action)=>{
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
      ]
  })
  .addCase(modifyQuantity,(state,action)=>{
    return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: Number(action.payload.quantity) }
          : item
      );
  })
  .addCase(clearCart,(state,action)=>{
return state.filter(item => item.id !== action.payload);
  })
  .addCase(removeProduct,(state,action)=>{
return [];
  })
})
export default CartReducer