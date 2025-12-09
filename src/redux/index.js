
import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../reducer/card";


const rootReducer={
    cart:CartReducer
}
export const store=configureStore({
    reducer:rootReducer
})
