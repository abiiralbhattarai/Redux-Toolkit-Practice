import { createSlice } from '@reduxjs/toolkit';

import cartProducts from '../../../cartProducts';


interface defState {
    cartItems: any[],
    amount: number,
    total: number,
    isLoading : boolean

}

const initialState = {
    cartItems: cartProducts,
    amount: 4,
    total: 0,
    isLoading: true,
    
} as defState;

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: { 
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        },
        increase: (state,action) => {
            const itemId = action.payload;
            const cartItem = state.cartItems.find((item) => item.id === itemId);
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, action) => {
            const itemId = action.payload;
            const cartItem = state.cartItems.find((item) => item.id === itemId);
            cartItem.amount = cartItem.amount - 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
    },
});

export const {clearCart,removeItem, increase, decrease,calculateTotals} = cartSlice.actions;

export default cartSlice.reducer;