import { createSlice } from '@reduxjs/toolkit';

const uiCartSlice = createSlice({
  name: 'UI',
  initialState: { cartIsShowen: false },
  reducers: {
    toggle(state){
      state.cartIsShowen = !state.cartIsShowen 
    }
    }
  });

  export const uiCartActions = uiCartSlice.actions;
  export default uiCartSlice; 