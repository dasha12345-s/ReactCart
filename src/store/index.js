import { configureStore } from '@reduxjs/toolkit';
import uiCartSlice from './uiSlice';
import cart from './cartSlice';


const store = configureStore({
  reducer: { uiCart: uiCartSlice.reducer, cart: cart.reducer }
});

export default store;