import { configureStore } from "@reduxjs/toolkit"; 
import rectslice from '../reducer/reducerSlice'
const store=configureStore({
    reducer:{
        cards:rectslice  
    }
})
export default store;