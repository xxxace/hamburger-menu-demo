import {configureStore} from "@reduxjs/toolkit";
import shoppingCartReducer from './modules/shopping-cart';

const store = configureStore({
    reducer: {
        shoppingCart: shoppingCartReducer
    }
});

export default store;