import { useDispatch,  useSelector } from 'react-redux';
import {uiCartActions} from '../../store/uiSlice'
import classes from './CartButton.module.css';

const CartButton = (props) => {

  const dispatch = useDispatch()
  const cartQuantity = useSelector(state => state.cart.totalQuantity)

  const toggleCart = () => {
    dispatch(uiCartActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
