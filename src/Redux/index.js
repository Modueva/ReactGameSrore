import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Cart/Reduser';
import gamesReducer from './Games/Reduser';

export const  store = configureStore({
    reducer:{
        cart: cartReducer,
        game: gamesReducer,
    },
});