import { createSlice } from '@reduxjs/toolkit';

const testimonialsSlice = createSlice({
    
    name: 'testimonials',

    // made up testimonials
    initialState: [
        {
            name: 'Ayn Rand',
    
            testimony: 'These donuts are the what the full realization of Objectivism taste like.',
    
            image: '/images/ayn-rand.jfif'
        },
    
        {
            name: 'Tony Robbins',
    
            testimony: 'Constant and Never Ending Improvement (CANI) has met its match. These donuts are PERFECT.',
    
            image: '/images/tony-robbins.jfif'
        },
    
        {
            name: 'Nostradamus',
    
            testimony: 'I predict these donuts will become a staple in the world diet by 2027.',
    
            image: '/images/nostradamus.jfif'
        }
    ],

    reducers: {}
});

// selector 
export const selectTestimonials = (state) => state.testimonials;
// reducer
export default testimonialsSlice.reducer;


