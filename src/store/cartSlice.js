import { createSlice } from '@reduxjs/toolkit';

const cart = createSlice({
  name: 'cart',
  initialState: {
    item: [],
    totalQuantity:  0,
    totalAmaunt
  },
  reducers: {
    addItem(state, action){},
    removeItem(state, action){
      const newItem = action.payload;
      const existindItem = state.item.find(item.id === item.id);
      if(!existindItem){
        state.item.push({
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
  }
})