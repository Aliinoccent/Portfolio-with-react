import { createSlice } from "@reduxjs/toolkit";
const reactSlice=createSlice({
    name:'cards',
    initialState:'',
    reducers:{
        cardObject:(state,action)=>{
            return action.payload
        }
    }
})
export const {cardObject}=reactSlice.actions;
export default reactSlice.reducer;