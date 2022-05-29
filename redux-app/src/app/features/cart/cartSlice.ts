import { createSlice } from '@reduxjs/toolkit';

interface defState {
    cartItems: any[],
    amount: number,
    total: number,
    isLoading : boolean

}

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
    
} as defState;

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: { },
   
});

export default cartSlice.reducer;