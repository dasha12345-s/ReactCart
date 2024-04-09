import { uiCartActions } from './uiSlice';
import { cartActions } from './cartSlice';

export const fetchCartData = () => {
  return async (dispatch) => {
    const  fetchData = async () => {
      const response = await fetch('https://react-demo-94c4b-default-rtdb.firebaseio.com/cart.json');

      if (!response.ok){
        throw new Error('error again')
      }

      const data = await response.json();

      return data;
    }

    try{
     const cartData = await fetchData();
     dispatch(cartActions.replaceCart({
      items:  cartData.items || [],
    totalQuantity: cartData.totalQuantity}));
    }catch(error){
      dispatch(
        uiCartActions.showNotifiication({
        status: 'error',
        title: 'Error',
        message: 'fetching Failed!',
      }))
    }
  };
} 

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
      body: JSON.stringify({
        items: cart.items,
        totalQuantity: cart.totalQuantity,
      }),
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