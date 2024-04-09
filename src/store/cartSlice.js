import { createSlice } from '@reduxjs/toolkit';
import { uiCartActions } from './uiSlice';

const cart = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItem(state, action){
      const newItem = action.payload;
      const existindItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
      if(!existindItem){
        state.items.push({
          id: newItem.id, 
          price: newItem.price, 
          quantity: 1, 
          totalPrice: newItem.price,
          name: newItem.title
      });
      } else {
        existindItem.quantity++;
        existindItem.totalPrice = existindItem.totalPrice + newItem.price;
      }
    },
    removeItem(state, action){
      const id = action.payload;
      const existindItem = state.items.find(item => item.id === id);
      state.totalQuantity--;
      if (existindItem.quantity === 1){
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existindItem.quantity--;
        existindItem.totalPrice = existindItem.totalPrice - existindItem.price;
      }
    },
  }
});

export const sendCartData = (cart) => {
  return async(dispatch) => {
    dispatch(
      uiCartActions.showNotifiication({
      status: 'pending',
      title: 'sending',
      message: 'sending data!',
    })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://react-demo-94c4b-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT', 
      body: JSON.stringify(cart),
    }); 
  
    if (!response.ok){
      throw new Error('sending cart data failed.');
    }};

    try {
      await sendRequest();

        
  dispatch(
    uiCartActions.showNotifiication({
    status: 'success',
    title: 'Success!',
    message: 'Sended!',
  })
  )
    } catch (error){
      dispatch(
        uiCartActions.showNotifiication({
        status: 'error',
        title: 'Error',
        message: 'Failed!',
      }))
    };

  };
}

export const cartActions = cart.actions;
export default cart;