import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"Cart",
    initialState:{
        product:[]
    },
    reducers:{
        Add_to_cart: (state,{payload}) =>{
          const Item_Incart =  state.product.find(item => item.id === payload.id);
          if(Item_Incart){
            Item_Incart.quantity++;
          }else{
            state.product.push({...payload,quantity:1}) 
          }
        }
    }
})

export const {Add_to_cart} = cartSlice.actions;

export default cartSlice.reducer;