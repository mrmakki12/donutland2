import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectDonuts } from './donutsSlice';
import { addToCart } from '../Cart/cartSlice';
// import styles
import './donuts.css';

export const Donuts = (props) => {

    // get donuts from state
    const donuts = useSelector(selectDonuts);

    // used to disable add to cart when checkout box is open
    const display = props.display;

    const dispatch = useDispatch();

    return (

        <section id='donuts' className='donuts-container container'>

            <div>
                <h2>Our Donuts! Mmmm..</h2>
            </div>
            <div className='donuts-wrapper'>
                {/* scroll left  */}
                <button 
                    aria-label='scroll left'
                    className='scroll left'
                    onClick={() => document.querySelector('.donuts').scrollBy({top: 0, left: -375, behavior: 'smooth'})}
                />
                {/* render donuts */}
                <div className='donuts'>
                    {
                        donuts.map(donut => {

                            return (

                                <div className='donut' key={donut.name}>
                                    {/* image and name  */}
                                    <div className='donut-img-name' style={{boxShadow:'-15px 15px #bd00ff'}}>
                                        <img 
                                            src={donut.img}
                                            alt={donut.name}
                                        />
                                        <br />
                                        <p><b>{donut.name}</b></p>
                                    </div>
                                    {/* description and add to cart button  */}
                                    <div className='description-add-to-cart'>
                                        <p>{donut.description}</p>
                                        <button 
                                            disabled={display === 'flex' ? true : false }
                                            className='addToCartBtn'
                                            aria-label='add to cart'
                                            onClick={() => dispatch(addToCart({donut}))}
                                            >
                                            Add To Cart!
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {/* scroll right  */}
                <button
                    aria-label='scroll left'
                    className='scroll right' 
                    onClick={() => document.querySelector('.donuts').scrollBy({top: 0, left: 375, behavior: 'smooth'})}
                />
            </div>

        </section>
    )

}