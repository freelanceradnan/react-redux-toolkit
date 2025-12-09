// import { createStore } from 'redux'
// import { cardReducer } from '../reducer/card'

// export const store = createStore(cardReducer)
import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from './../reducer/card';

const rootReducer={
    cart:cardReducer
}
export const store=configureStore({
    reducer:rootReducer
})