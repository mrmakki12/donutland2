import React from 'react';
import { useSelector } from 'react-redux';
import { selectTestimonials } from './testimonialsSlice';
// import style sheet 
import './testimonials.css';


export const Testimonials = () => {

    // get testmonials from state
    const testimonials = useSelector(selectTestimonials);

    return (
        
        <section className='testimonials-container container'>
            <div className='title'>
                <h2>Testimonials!</h2>
            </div>
            {/* container for testmonials */}
            <div className='testimonials'>
                {/* render testimonials from data  */}
                {
                    testimonials.map(testimonial => {
                        return (
                            <div className='testimonial' key={testimonial.name} aria-label='testimonial'>
                                {/* image and name  */}
                                <div className='testi-name-img'>
                                    <img src={testimonial.image} alt={testimonial.name}/>
                                    <br />
                                    <p><b>{testimonial.name}</b></p>
                                </div>
                                {/* testimony  */}
                                <div className='testimony'>
                                    <p>"{testimonial.testimony}"</p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}