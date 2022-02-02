import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCart, clearCart } from './cartSlice';
import { Popup } from '../Popup/Popup.js';
// styles 
import './cart.css';

export const Cart = (props) => {

    // used to show popup
    const setDisplay = props.setDisplay;
    // current display value
    const display = props.display;

    // get cart from state
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();

    // get total price 
    const getTotal = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.quantity * item.price;
        })
        return total;
    }

    return (

        <div className='cart-container'>
            {/* cart header  */}
            <div className='cart-header'>
                <h1>Your Cart!</h1>
            </div>
            
            <div className='cart-info'>
                <h1>Name</h1>
                <h1>Quantity</h1>
            </div>
            {/* render cart when donuts added to cart and
            calculate total */}
            {
                cart.map(item => {

                    return(
                        <div className='item-info'>
                        <p>{item.name}</p>
                        <p>{item.quantity}</p>
                    </div>
                    )
                   
                })
            }
            <div className='total-header'>
                <h1>Total: </h1>
                <h1>${getTotal().toFixed(2)}</h1>
            </div>

            <div>
                <button 
                    className='order-button' 
                    aria-label='order now!'
                    disabled={getTotal() === 0 ? true : false}
                    onClick={() => {
                        console.log(getTotal());
                        setDisplay('flex');
                        dispatch(clearCart());
                    }}
                    >
            
                    Order!
                </button>
            </div>
            <Popup
                setDisplay={setDisplay}
                display={display}
            />
        </div>
    )
}