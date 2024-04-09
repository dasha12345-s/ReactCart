import { createSlice } from '@reduxjs/toolkit';

const uiCartSlice = createSlice({
  name: 'ui',
  initialState: { cartIsShowen: false, notification: null },
  reducers: {
    toggle(state){
      state.cartIsShowen = !state.cartIsShowen 
    },
    showNotifiication(state, action){
      state.notification = {
        status: action.payload.status, 
        title: action.payload.title,
        message: action.payload.message,
      }
    }
    }
  });

  export const uiCartActions = uiCartSlice.actions;
  export default uiCartSlice; 