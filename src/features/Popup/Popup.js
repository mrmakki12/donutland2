import React from 'react';
// import styles
import './popup.css';

export const Popup = (props) => {

    // used to set display style of popup
    const display = props.display;
    // used to close popup
    const setDisplay = props.setDisplay;

    return (
        <section className='popup-container' style={{display: display, opacity: 1}}>
            {/* header  */}
            <div className='complete-header'>
                <h1>Order Complete!</h1>
            </div>
            {/* thanks message  */}
            <div className='message'>
                <p>
                    Thanks for your order!
                    The Best Donut-Makers in the WORLD are now 
                    preparing your order. It'll be done before 
                    you know, so head on over here now!
                    We can't wait to meet you!
                </p>
            </div>
            {/* close pop-up  */}
            <div className='close'>
                <button 
                aria-label='close pop-up'
                onClick={() => {
                    setDisplay('none');
                }}
                >
                    Close!
                </button>
            </div>

        </section>
    )
}