import { configureStore } from '@reduxjs/toolkit';
// import slices 
import donutsSlice from '../features/Donuts/donutsSlice.js';
import cartSlice from '../features/Cart/cartSlice.js';
import testimonialsSlice from '../features/Testimonials/testimonialsSlice.js'

export const store = configureStore({
  
  reducer: {

    donuts: donutsSlice,
    cart: cartSlice,
    testimonials: testimonialsSlice,

  },
});
