import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Cart/Reduser';

export const  store = configureStore({
    reducer:{
        cart: cartReducer,
    },
});