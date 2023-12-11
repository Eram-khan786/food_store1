// Import necessary dependencies
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'

// Configure the Redux store
const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    }
});

export default appStore;
