
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CartContainer from './components/CartContainer';
import { calculateTotals } from './app/features/cart/cartSlice';
import NavBar from './components/NavBar';
import Modal from './components/Modal';
import './App.css';

function App() {
  const { isOpen } = useSelector((state:any) => state.modal);
  const { cartItems} = useSelector((state:any) => state.cart);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(calculateTotals());
  },[cartItems,dispatch] );
    return(
      <main>
      {isOpen && <Modal />}
    <NavBar/>
    <CartContainer/>
    </main>
    )
  }
  export default App;
