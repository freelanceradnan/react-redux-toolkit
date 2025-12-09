// export const cardReducer = (state = [], action) => {
//   switch(action.type) {
//     case "":
     ;

//     case "cart/modifyQuantity":
      

//     case "":
//       

//     case "":
//       

//     default:
//       return state;
//   }
// };
import { createReducer } from "@reduxjs/toolkit";
export const CartReducer=createReducer([],(builder)=>{
  builder
  .addCase('card/addToCart',(state,action)=>{
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
  .addCase('cart/modifyQuantity',(state,action)=>{
    return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: Number(action.payload.quantity) }
          : item
      );
  })
  .addCase('cart/removeProduct',(state,action)=>{
return state.filter(item => item.id !== action.payload);
  })
  .addCase('cart/clearCart',(state,action)=>{
return [];
  })
})
export default CartReducer