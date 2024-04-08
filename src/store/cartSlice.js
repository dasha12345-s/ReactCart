import { createSlice } from '@reduxjs/toolkit';

const cart = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItem(state, action){
      const newItem = action.payload;
      const existindItem = state.items.find(item => item.itemId === newItem.id);
      state.totalQuantity++;
      if(!existindItem){
        state.items.push({
          itemId: newItem.id, 
          price: newItem.price, 
          quantity: 1, 
          totalPrice: newItem.price,
        title: newItem.title
      });
      } else {
        existindItem.quantity++;
        existindItem.totalPrice = existindItem.totalPrice + newItem.price;
      }
    },
    removeItem(state, action){
      const id = action.payload;
      const existindItem = state.items.findIndex(item => item.id === id);
      state.totalQuantity--;
      if (existindItem.quantity !== -1){
        state.items = state.items.filter(item => item.itemId === id);
      } else {
        existindItem.quantity--
        existindItem.totalPrice = existindItem.totalPrice - existindItem.price;
      }
    },
  }
})

export const cartActions = cart.actions;
export default cart;