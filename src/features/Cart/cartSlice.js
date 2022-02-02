import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({

    name: 'cart',

    initialState: {},

    reducers: {
        // add donut to cart
        addToCart: (state, action) => {
            const { donut } = action.payload;
            state[donut.name] = {
                name: donut.name,
                quantity: state[donut.name] ? state[donut.name].quantity + 1 : 1,
                price: donut.price
            }
        },
        // clear the cart, order complete
        clearCart: (state) => {
            for(const donut in state) {
                delete state[donut];
            }
        }
    }
});

// selector
export const selectCart = (state) => Object.values(state.cart);
// actions
export const { addToCart, clearCart } = cartSlice.actions;
// reducer
export default cartSlice.reducer;