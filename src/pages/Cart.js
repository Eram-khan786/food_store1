 import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux'
import ItemList from '../components/ItemList';
import { clearCart } from '../utils/cartSlice';
// import { removeItem } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)
  const dispatch=useDispatch();
  const handleCartClear=()=>{
    dispatch(clearCart())
  }
  
  // const handleCartPOP=()=>{
  //   dispatch(removeItem())
  // }
  return (
    <div className='text-center m-4 p-4'>
      <h1 className='text-2xl font-bold'>Cart</h1>
      <div className='w-6/12 m-auto'>
        <ItemList List={cartItems} />
      </div>
      <button className='p-2 m-2 bg-black text-white rounded-lg' onClick={handleCartClear}>Clear Cart</button>
      {cartItems.length===0 && <h1>Cart is Empty ,Add items to the card</h1>}
      {/* <button className='p-2 m-2 bg-black text-white rounded-lg' onClick={handleCartPOP}>Delete One Item</button> */}
    </div>
  );
};

export default Cart;
