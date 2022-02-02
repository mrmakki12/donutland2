import React from 'react';
// import styles
import './about.css'

export const About = () => {

    return (

        <section id='about' className='about-info container'>
            {/* pic of the storefront */}
            <div className='store-front' data-aos="fade-right">
                <img src='/images/store-front.jfif' alt='store front'/>
            </div>
            {/* container for about and contact info */}
            <div className='about-contact' data-aos="fade-left">
                {/* about */}
                <div className='about'>
                    <h2>About!</h2>
                    <p>Welcome to Donutland! Founded just now,
                        we are the home of the best donuts in the world.
                        Why settle for factory made donuts when Donutland 
                        never settles in our commitment to excellence!
                    </p>
                </div>
                {/* contact info */}
                <div className='contact'>
                    <h2>Contact!</h2>
                    <p><b>We'd love to have you!</b></p>
                    <p><b>Address: </b>000 Donutland Lane, Donut City, Donut State, 00000, Donut Country</p>
                    <p><b>Phone: </b>+0-000-0000</p>
                </div>

            </div>

        </section>
    )
}