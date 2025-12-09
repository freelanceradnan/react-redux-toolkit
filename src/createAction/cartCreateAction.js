import { createAction } from "@reduxjs/toolkit";

export const addToCart=createAction("addToCart")
export const modifyQuantity=createAction("modifyQuantity")
export const removeProduct=createAction("removeProduct")
export const clearCart=createAction("clearCart")
