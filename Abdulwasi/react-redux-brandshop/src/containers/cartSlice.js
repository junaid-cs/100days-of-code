import { createSlice} from "@reduxjs/toolkit";

const initialState ={
    CartItems : [],
    cartTotalQuantity: 0,
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers:{
        addToCart(state, action){
         const itemIndex =   state.CartItems.findIndex((item) => item.id === action.payload.id);
         if(itemIndex >= 0){
            state.CartItems[itemIndex].cartQuantity +=1;
         }else{
            const tempProduct = { ...action.payload, cartQuantity: 1};
            state.CartItems.push(tempProduct)
         }
        },
        getTotals(state, action){
         let {quantity} =  state.CartItems.reduce((cartTotal, cartItem)=> {
                const {cartQuantity} = cartItem;
                const itemTotal =cartQuantity;

                cartTotal.total +=itemTotal;
                cartTotal.quantity +=cartQuantity;
                
                return cartTotal
            }, {
                total: 0,
                quantity: 0,

            });

            state.cartTotalQuantity = quantity;
        }
    }
})

export const {addToCart, getTotals} = cartSlice.actions;

export default cartSlice.reducer;