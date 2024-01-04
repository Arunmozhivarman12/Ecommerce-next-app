'use client'

import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./productreducer";
import cartreducer from "./cartreducer";
 

export const store = configureStore({
    reducer:{
        Pro:ProductReducer,
        cart:cartreducer
    }
})