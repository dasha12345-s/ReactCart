import { configureStore } from '@reduxjs/toolkit';
import uiCartSlice from './uiSlice';


const store = configureStore({
  reducer: { uiCart: uiCartSlice.reducer }
});

export default store;