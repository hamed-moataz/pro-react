import { configureStore } from "@reduxjs/toolkit";
import { cartslice } from "./Cartslice";
import { userslice } from "./userslice";
const store = configureStore({
    reducer :{
        cart : cartslice.reducer,
        user : userslice.reducer,

    }
})
export default store