import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// import cartProducts from '../../../cartProducts';

const url = 'https://course-api.com/react-useReducer-cart-project';


interface defState {
    cartItems: any[],
    amount: number,
    total: number,
    isLoading : boolean

}

const initialState = {
    cartItems: [],
    amount: 4,
    total: 0,
    isLoading: true,
    
} as defState;

export const getCartItems:any = createAsyncThunk(
    'cart/getCartItems' ,
    async (name, thunkAPI) => {
        try {
            const resp = await axios(url);
            return resp.data;

        }catch(error){
            return thunkAPI.rejectWithValue('something went wrong');
    
    }
}
);

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
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true;
        },
        [getCartItems.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cartItems = action.payload;
        },
        [getCartItems.rejected]: (state,action) => {
            console.log(action);
            state.isLoading = false;
        },
    },
});

export const {clearCart,removeItem, increase, decrease,calculateTotals} = cartSlice.actions;

export default cartSlice.reducer;