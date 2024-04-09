import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';
import { uiCartActions } from './store/uiSlice'
import Notification from './components/UI/Notification'

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.uiCart.cartIsShowen);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.uiCart.notification)

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiCartActions.showNotifiication({
        status: 'pending',
        title: 'sending',
        message: 'sending data!',
      })
      );
      const response = await fetch(
        'https://react-demo-94c4b-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT', 
      body: JSON.stringify(cart),
    }); 

    if (!response.ok){
      throw new Error('sending cart data failed.');
    }

    dispatch(
      uiCartActions.showNotifiication({
      status: 'success',
      title: 'Success!',
      message: 'Sended!',
    })
    )
  }

  if(isInitial){
    isInitial = false;
    return;
  }

    sendCartData().catch((error) => {
      dispatch(
        uiCartActions.showNotifiication({
        status: 'error',
        title: 'Error',
        message: 'Failed!',
      }))
    });
  }, [cart, dispatch]);

  return (
    <Fragment>
      { notification && <Notification 
      status={notification.status} 
      title={notification.title}
      message={notification.message}/>}
      <Layout>
      { showCart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
